import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cabirpoya/',  // ⚠️ دقیقاً همین مقدار، چون نام ریپازیتوری همین است
  plugins: [react()],
});
