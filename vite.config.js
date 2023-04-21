/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// PLugins
// https://github.com/vitejs/awesome-vite#plugins

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  test: {
    // your Unit Testing here
  }
  
})
