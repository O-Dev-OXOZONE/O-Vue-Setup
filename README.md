# O-Vue-Setup

The setup of the projects on Vue js framework with descriptions, linters, tests e.t.c

- [x] Vue3
- [x] Vite
- [x] TS
- [x] vue-router
- [x] SCSS
- [x] Tailwind
- [x] Tests
- [x] Linter
- [ ] Pinia
- [ ] SVG-loader
- [ ] i18n
- [ ] odevlib api integrations

TODO in the future:

- [ ] update router to some file-system-based solution
- [ ] pre-commit hooks https://github.com/okonet/lint-staged

Linter

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

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
