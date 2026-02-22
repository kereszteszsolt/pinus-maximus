import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': new URL('./', import.meta.url).pathname,
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.spec.ts'],

    clearMocks: true,
    restoreMocks: true,

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',

      include: ['entrypoints/**/*.{ts,tsx,js,jsx}', 'app/**/*.{ts,tsx,js,jsx}'],
      exclude: [
        'node_modules/**',
        'dist/**',
        '.wxt/**',
        '.output/**',
        'coverage/**',

        '**/*.d.ts',
        '**/*.{css,scss,sass,less}',

        '**/*.test.*',
        '**/*.spec.*',
        '**/__tests__/**',
        '**/*.stories.*',
      ],

      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80,
      },
    },
  },
});
