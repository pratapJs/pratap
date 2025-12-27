import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/', // Set base URL to root for Netlify/Vercel
    build: {
        outDir: 'build', // Maintain 'build' output matching CRA/gh-pages expectations
    },
    server: {
        port: 3000,
    },
});
