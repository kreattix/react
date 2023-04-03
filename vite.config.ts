import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'

const { EsLinter, linterPlugin } = EsLint

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'],
      name: '@kreattix/react',
    },
    minify: 'esbuild',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    sourcemap: true,
  },
  envPrefix: 'KREATTIX',
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx,js,jsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/**/*'],
    }),
  ],
}))
