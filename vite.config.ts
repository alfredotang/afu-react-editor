/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode', mode)
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      mode === 'development' ? checker({ typescript: true }) : null,
    ],
    base: mode === 'production' ? '/afu-react-editor' : '/',
  }
})
