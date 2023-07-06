# O-Vue-Setup

The setup of the projects on Vue js framework with descriptions, linters, tests e.t.c

- [x] Vue3
- [x] Vite
- [x] TS
- [x] vue-router
- [x] SCSS
- [x] Tailwind
- [ ] Tests
- [ ] Linter
- [ ] Pinia
- [ ] SVG-loader
- [ ] i18n
- [ ] odevlib api integrations

TODO in the future:

- [ ] update router to some file-system-based solution

Additional comments:

- `tsconfig.node.ts` is needed due the following issue: https://github.com/vitejs/vite/issues/2031

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
