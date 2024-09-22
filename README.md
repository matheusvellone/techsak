MatheusVellone's Tech SAK (Swiss Army Knife)
---

This project is a collection of tools and utilities that I've created to help me in my day-to-day work. I've decided to share them with the community in the hope that they can be useful to others as well.

```sh
npm i -D @vellone/techsak
```

## Makefile
Commands with `##` after the target are 'public' commands and are intended to be used by developers.
The other commands are 'hidden' and are intended to be used by automations or by 'public' commands.

Add the following code in your Makefile to include this project's Makefile:

```makefile
include ./node_modules/@vellone/techsak/Makefile
```

## EditorConfig
Run `make .editorconfig` to copy this project's `.editorconfig` to your project.

## Eslint Config
Add the following code in your `.eslintrc.json` to include this project's ESLint configuration:

```json
{
  "extends": [
    "./node_modules/@vellone/techsak/.eslintrc.json"
  ]
}
```


## TSConfig

Add the following code in your `tsconfig.json` to include this project's TypeScript configuration:

```json
{
  "extends": "./node_modules/@vellone/techsak/tsconfig.json"
}
```
