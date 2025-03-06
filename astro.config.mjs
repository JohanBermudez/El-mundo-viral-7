// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel({
    imageService: true,
    // No especificamos el runtime aquí, dejamos que el adaptador use el valor por defecto
    // que será compatible con la configuración de Vercel
  })
});
