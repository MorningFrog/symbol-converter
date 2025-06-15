import * as vscode from "vscode";

export class Parser {
    private includeRegexes: RegExp[];
    private excludeRegexes: RegExp[];
    private symbolConvertRules: { [key: RegExp]: string };
    private filenameLast = ""; // the last filename processed
    private filenameSatisfied = false; // whether the last filename satisfied the include/exclude patterns

    constructor() {
        // Get vscode settings
        const config = vscode.workspace.getConfiguration("symbol-converter");

        this.includeRegexes = this.convertFilenamePatterns(
            config.get<string[]>("include-files") || []
        );
        this.excludeRegexes = this.convertFilenamePatterns(
            config.get<string[]>("exclude-files") || []
        );
        this.symbolConvertRules =
            config.get<{ [key: string]: string }>("rules") || {};
    }

    public configChangedCallback(event: vscode.ConfigurationChangeEvent): void {
        const config = vscode.workspace.getConfiguration("symbol-converter");
        if (event.affectsConfiguration("symbol-converter.include-files")) {
            this.includeRegexes = this.convertFilenamePatterns(
                config.get<string[]>("include-files") || []
            );
        }
        if (event.affectsConfiguration("symbol-converter.exclude-files")) {
            this.excludeRegexes = this.convertFilenamePatterns(
                config.get<string[]>("exclude-files") || []
            );
        }
        if (event.affectsConfiguration("symbol-converter.rules")) {
            this.symbolConvertRules =
                config.get<{ [key: string]: string }>("rules") || {};
        }
    }

    /**
     * 转换文件名模式为正则表达式
     * 将模式中的*转换为正则表达式的.*
     * 同时转义其他正则特殊字符，确保它们被当作普通字符处理
     * @param patterns 原模式字符串序列
     * @returns 新的模式序列
     */
    private convertFilenamePatterns(pattern: string[]): RegExp[] {
        return pattern.map((p) => {
            const escapedPattern = p
                .replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&") // 转义正则特殊字符
                .replace(/\*/g, ".*"); // 将*替换为.*
            return new RegExp(`^${escapedPattern}$`);
        });
    }

    /**
     * 检查文件名是否满足包含和排除模式
     * @param fileName 文件名
     * @returns 是否满足条件
     */
    private checkFileName(fileName: string): boolean {
        // 检查是否满足包含模式
        const isIncluded = this.includeRegexes.some((regex) =>
            regex.test(fileName)
        );
        // 检查是否满足排除模式
        const isExcluded = this.excludeRegexes.some((regex) =>
            regex.test(fileName)
        );
        return isIncluded && !isExcluded;
    }

    /**
     * Finds all single line comments delimited by a given delimiter and matching tags
     * @param activeEditor The active text editor containing the code document
     */
    public changeSymbol(activeEditor: vscode.TextEditor): string {
        // If highlight single line comments is off, single line comments are not supported for this language

        // check if filename satisfies include and exclude patterns
        const fileName = activeEditor.document.fileName.split(/[\\/]/).pop();
        if (this.filenameLast === fileName) {
            // If the filename hasn't changed, return the last processed text
            if (!this.filenameSatisfied) {
                return activeEditor.document.getText();
            }
        } else {
            this.filenameLast = fileName;
            this.filenameSatisfied = this.checkFileName(fileName);
            if (
                !this.filenameSatisfied ||
                Object.keys(this.symbolConvertRules).length === 0
            ) {
                return activeEditor.document.getText();
            }
        }

        let text = activeEditor.document.getText();
        let textLast = text;
        for (const [key, value] of Object.entries(this.symbolConvertRules)) {
            // Replace all occurrences of the key with the value
            text = text.replaceAll(key, value);
        }

        if (text !== textLast) {
            activeEditor.edit((editor) => {
                const doc = activeEditor.document;
                const startPos = new vscode.Position(0, 0);
                const lastLine = doc.lineAt(doc.lineCount - 1);
                const endPos = lastLine.range.end;
                const entireRange = new vscode.Range(startPos, endPos);
                editor.replace(entireRange, text);
            });
        }
        return text;

        //activeEditor.document.setText(text);
    }
}
