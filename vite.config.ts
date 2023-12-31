// / <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import svgLoader from 'vite-svg-loader'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), svgLoader({ defaultImport: 'component' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    setupFiles: ['./src/tests/setup.ts'],
    environment: 'jsdom',
    mockReset: true,
    globals: true,
    isolate: false,
    coverage: {
      provider: 'istanbul', // or 'istanbul'
      all: true, // shows the coverage for entire project
      exclude: [
        // @ts-ignore
        ...configDefaults.coverage.exclude,
        '{postcss,tailwind}.config.*',
        'src/router/*',
        'src/main.ts',
      ],
      watermarks: {
        // may be edited from project to project
        statements: [60, 80],
        functions: [60, 80],
        branches: [60, 80],
        lines: [60, 80],
      },
      // css: false -TODO: experiment with np
    },
  },
})
