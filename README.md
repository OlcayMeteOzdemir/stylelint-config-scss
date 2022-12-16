# stylelint-config-scss

Custom StyleLint settings for SCSS as an extensible shared config.

## Installation

If using npm version 5+:

```bash
npx install-peerdeps --dev @meteozdemir/stylelint-config-scss
```

If using npm version version < 5:

```bash
npm install -g install-peerdeps
install-peerdeps --dev @meteozdemir/stylelint-config-scss
```

If want to install manually without install-peerdeps CLI:

```bash
npm i -D @meteozdemir/stylelint-config-scss stylelint stylelint-scss postcss postcss-scss stylelint-high-performance-animation stylelint-order stylelint-prettier
```

## Usage

A `.stylelintrc` file will be automatically created in the root of your project with:

```json
{
    "extends": [
        "@meteozdemir/stylelint-config-scss",
        "@meteozdemir/stylelint-config-scss/rules/prettier"
    ],
    "rules": {}
}
```

If the file is not created automatically by any reason, simply create a `.stylelintrc` file in the root of project and copy code above.

## @meteozdemir/stylelint-config-scss/rules/prettier

Prettier is enabled by default with this package and `@meteozdemir/stylelint-config-scss/rules/prettier` disables StyleLint rules that might conflict with Prettier.

If you don't want to use Prettier, remove `'@meteozdemir/stylelint-config-scss/rules/prettier'` from `.stylelintrc` file.

```json
{
    "extends": ["@meteozdemir/stylelint-config-scss"],
    "rules": {}
}
```

## Rule Override

Add any rule you want to override to rules object in `.stylelintrc` file.

```json
{
    "extends": [
        "@meteozdemir/stylelint-config-scss",
        "@meteozdemir/stylelint-config-scss/rules/prettier"
    ],
    "rules": {
        // ...
        "scss/at-import-partial-extension": "always",
        "scss/at-mixin-argumentless-call-parentheses": "never",
    }
}
```
