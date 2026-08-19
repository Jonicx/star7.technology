import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/star7.technology/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'contact-form-mock',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST' && req.url === '/forms/contact.php') {
            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });
            req.on('end', () => {
              console.log('Dev server received contact form submission:', body);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain');
              res.end('OK');
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
