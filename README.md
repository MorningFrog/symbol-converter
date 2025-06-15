<div align="center">

<h1>Symbol Converter<br>符号转换器</h1>

English / [简体中文](./README_zh-CN.md)

A VSCode extension which automatically convert symbols when entering.

在输入文本时自动转换符号的 VSCode 扩展。

![License](https://img.shields.io/github/license/MorningFrog/symbol-converter?color=blue)
![Installs](https://img.shields.io/visual-studio-marketplace/i/morningfrog.symbol-converter?color=blue)
![Downloads](https://img.shields.io/visual-studio-marketplace/d/morningfrog.symbol-converter?color=blue)
![Rating](https://img.shields.io/visual-studio-marketplace/r/morningfrog.symbol-converter?color=blue)
![Version](https://img.shields.io/github/package-json/v/MorningFrog/symbol-converter?color=blue)
![Stars](https://img.shields.io/github/stars/MorningFrog/symbol-converter?style=social)

</div>

## Features

- Convert full-width characters to half-width characters automatically
- Customize symbol converting
- Set the filenames with and without replacement enabled

## Extension Settings

This extension contributes the following settings:

- `symbol-converter.include-files`: The filenames for which symbol replacement takes effect can have multiple matching patterns. Use `*` to match any number of arbitrary characters. Example: `[\"*.py\", \"*.cpp\"]`
- `symbol-converter.exclude-files`: The filenames to be excluded from symbol replacement, used to exclude specific files from the effective filename patterns. Use `*` to match any number of arbitrary characters. Example: `[\"*.md\", \"*.txt\", \"package.json\"]`
- `symbol-converter.rules`: Replacement rules. For example, `{\"。\": \".\"}` means replacing all `。` with `.`. Multiple rules can be configured.

## Install

There are three installation methods:
- Search for "Symbol Converter" in VSCode extensions and install it.
- In VSCode, use `Ctrl+Shift+P` to open the Command Panel and enter `ext install morningfrog.symbol-converter`.
- Download the `.vsix` file in the Release of the repository, then select `Install from VISX` in the upper right corner of the VSCode extension, and choose the downloaded `.vsix` file for installation.

## Acknowledgments

This project was inspired by VSCode extension [brand.change-symbol](https://gitee.com/brand_zhou/chang-symbol).

`brand.change-symbol` is licensed under MIT license，see [LICENSE](https://gitee.com/brand_zhou/chang-symbol/blob/master/LICENSE).

## Release Notes

### 0.0.1

Initial release of Symbol Converter.
