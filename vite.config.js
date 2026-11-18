import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = имя репозитория, чтобы сайт работал на https://gerych2.github.io/BudkoBarber/
export default defineConfig({
  plugins: [react()],
  base: '/BudkoBarber/',
})
