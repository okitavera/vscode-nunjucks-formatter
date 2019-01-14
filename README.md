# vscode-nunjucks-formatter

> Formatter for Nunjucks template. built on top of [prettydiff2](https://github.com/prettydiff/prettydiff/).

[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/okitavera/vscode-nunjucks-formatter/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Features

- Respect YAML-frontmatter data
- Accept other prettydiff2 options (limited), see below

# Installation
Available at [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=okitavera.vscode-nunjucks-formatter)
```
ext install okitavera.vscode-nunjucks-formatter
```

# Configuration

Keep YAML front-matter data. default: `true`

```json
"nunjucksFormat.frontMatterData": true
```

Force an Empty Line Above Comments. default: `false`

```json
"nunjucksFormat.commline": false
```

End Self-Closing Tags with a Space. default: `false`

```json
"nunjucksFormat.spaceclose": false
```

Indent Style/Script independently. default: `false`

```json
"nunjucksFormat.style": false
```

Merge Empty Tag Sets Into A Single Self-Closing Tag. default: `false`

```json
"nunjucksFormat.tagmerge": false
```

Sort Child Items of Each Parent Element tagsort. default: `false`

```json
"nunjucksFormat.tagsort": false
```

Preserve white space in text Content. default: `true`

```json
"nunjucksFormat.textpreserve": true
```
