<div align="center">

<h1>Symbol Converter<br>符号转换器</h1>

English(./README_zh-CN.md) / [简体中文](./README_zh-CN.md)

A VSCode extension which automatically convert symbols when entering.

在输入文本时自动转换符号的 VSCode 扩展。

![License](https://img.shields.io/github/license/MorningFrog/symbol-converter?color=blue)
![Installs](https://img.shields.io/visual-studio-marketplace/i/morningfrog.symbol-converter?color=blue)
![Downloads](https://img.shields.io/visual-studio-marketplace/d/morningfrog.symbol-converter?color=blue)
![Rating](https://img.shields.io/visual-studio-marketplace/r/morningfrog.symbol-converter?color=blue)
![Version](https://img.shields.io/github/package-json/v/MorningFrog/symbol-converter?color=blue)
![Stars](https://img.shields.io/github/stars/MorningFrog/symbol-converter?style=social)

</div>

## 特性

- 默认自动转换全角符号为半角符号
- 自定义符号替换
- 可设置启用替换的文件和不启用替换的文件

## 扩展设置

该扩展包括以下设置:

- `symbol-converter.include-files`: 符号替换生效的文件名，可以设置多个匹配模式。使用`*`表示匹配多个任意字符。例：`[\"*.py\", \"*.cpp\"]`
- `symbol-converter.exclude-files`: 符号替换排除的文件名，用于在生效的文件名模式中排除特定的文件。使用`*`表示匹配多个任意字符。例：`[\"*.md\", \"*.txt\"]`
- `symbol-converter.rules`: 替换规则。如 `{\"。\": \".\"}` 表示将所有的 `。` 替换为 `.`。可以设置多个规则。

## 安装

有三种安装方式:
- 在 VSCode 的扩展中搜索 "Symbol Converter" 或 "符号转换器" 并安装.
- 在 VSCode 中使用 `Ctrl+Shift+P` 打开命令栏, 输入 `ext install morningfrog.symbol-converter`.
- 在该仓库的 Release 中下载 `.vsix` 文件, 然后在 VSCode 的扩展右上角选择 "从VISX安装", 选择下载的 `.vsix` 文件进行安装.

## 致谢

该项目参考了 VSCode 扩展 [brand.change-symbol](https://gitee.com/brand_zhou/chang-symbol).


`brand.change-symbol` 项目采用开源协议 MIT，详见 [LICENSE](https://gitee.com/brand_zhou/chang-symbol/blob/master/LICENSE).


## Release Notes

### 0.0.1

Initial release of Symbol Converter.
