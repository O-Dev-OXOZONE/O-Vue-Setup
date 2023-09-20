# O-Vue-Setup

The setup of the projects on Vue js framework with descriptions, linters, tests e.t.c

## How to use repo

- In new repo

```bash
git remote add upstream https://github.com/O-Dev-OXOZONE/O-Vue-Setup.git

git pull upstream main


git push origin main
```

More info may be found in [this SO answer](https://stackoverflow.com/a/52954199/9154188)

## Draft of a project readme

The project is built using vite. The `npm` commands available are the following:

1. `npm run dev` - to start development mode

The environment variables will be loaded from local `.env` file. Remember, that the project-related constants should start with prefix `VITE_`. For backend url usually the constant `VITE_API_URL` is used

2. `npm run bulid` - to build the project, needed for CI/СD
3. `npm run test` - to run project's tests

Additional useful testing commands may be found here: https://github.com/O-Dev-OXOZONE/O-Vue-Setup/wiki/Stack-description.-Tests#a-few-advices

4. `npm run lint` - to execute linter
5. `npm run lint:fix` - to execute linter and check errors
6. `npm run format` - to run prettier an modify files
7. `npm run format:check` - to run prettier without file's modification

## Current state of the repo

- [x] Vue3
- [x] Vite
- [x] TS
- [x] vue-router
- [x] SCSS
- [x] Tailwind
- [x] Tests
- [x] Linter
- [x] Pinia
- [x] SVG-loader
- [x] i18n
- [x] odevlib api integrations

### TODO in the future (low priority):

- [ ] update router to some file-system-based solution
- [ ] pre-commit hooks https://github.com/okonet/lint-staged

## Linter

dpendencies list
| Dependency | Explanation |
|------------|-------------|
| `eslint` | static code analysis base **[100% needed]** |
| `vue-eslint-parser` | parser for vue files **[100% needed]** |
| `eslint-plugin-vue` | set of vue-specific eslint rules **[95% needed]** |
|`@typescript-eslint/parser` + `@typescript-eslint/plugin` | tool to parse `.ts` files|
| `@vue/eslint-config-typescript` | vue typescript part support **[90% needed]** |
| [AIRBNB] `eslint-config-airbnb-base` | set of `eslint` rules, used everywhere, doesn't include react-based rules |
| [AIRBNB] `@vue/eslint-config-airbnb` | airbnb for vue files |
| `eslint-plugin-simple-import-sort` | plugin to detect errors in import's sorting and their auto-fix |
|`prettier`| questionable, but popular tool for code-formatting. The main feature - `max-len` issue fixing|
| `eslint-config-prettier` && `eslint-plugin-prettier`| to make `prettier work` |

Additional comments:

- `tsconfig.node.ts` is needed due the following issue: https://github.com/vitejs/vite/issues/2031
- in tests imports from the `vitest` are not required due to `globals: true` option (TODO: watch the package for zero-imports of other modules - https://github.com/antfu/unplugin-auto-import/)

**Warning: node version 16+**
