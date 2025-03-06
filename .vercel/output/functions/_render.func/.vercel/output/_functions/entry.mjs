import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BAqLI1Ts.mjs';
import { manifest } from './manifest_BrlDfZYr.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/articulo/_slug_.astro.mjs');
const _page3 = () => import('./pages/categoria/_slug_.astro.mjs');
const _page4 = () => import('./pages/destacados.astro.mjs');
const _page5 = () => import('./pages/subsidios.astro.mjs');
const _page6 = () => import('./pages/tendencias.astro.mjs');
const _page7 = () => import('./pages/ultima-hora.astro.mjs');
const _page8 = () => import('./pages/virales.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/articulo/[slug].astro", _page2],
    ["src/pages/categoria/[slug].astro", _page3],
    ["src/pages/destacados.astro", _page4],
    ["src/pages/subsidios.astro", _page5],
    ["src/pages/tendencias.astro", _page6],
    ["src/pages/ultima-hora.astro", _page7],
    ["src/pages/virales.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1267b50a-aeee-4ace-9ca0-1406aadfc704"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
