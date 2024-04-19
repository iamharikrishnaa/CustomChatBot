import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // lib: {
    //   entry: './src/App.jsx',
    //   name: 'ChatbotWidget',
    //   fileName: format => `widget.${format}.js`,
    //   formats: ['umd'],
    // },
    // rollupOptions: {
    //   external: ['react', 'react-dom'],
    //   output: {
    //     globals: {
    //       react: 'React',
    //       'react-dom': 'ReactDOM',
    //     },
    //   },
    // },
  },
});
