import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: [
  //     { find: 'src', replacement: '/src' },
  //     { find: 'supabase', replacement: '/src/supabase' },
  //     { find: 'assets', replacement: '/src/assets' },
  //   ],
  // },
});
