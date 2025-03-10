/* empty css                                  */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DM1HrQfu.mjs';
import 'kleur/colors';
import { d as getArticles, $ as $$Layout } from '../chunks/Layout_D94e1BSP.mjs';
import { $ as $$NewsCard } from '../chunks/NewsCard_B-pj7SVW.mjs';
import { $ as $$CategoryFilter } from '../chunks/CategoryFilter_KcOng1Vi.mjs';
import { $ as $$ViewToggle } from '../chunks/ViewToggle_DZiR6I7Z.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Virales = createComponent(async ($$result, $$props, $$slots) => {
  let articles = [];
  try {
    const response = await getArticles({ viral: true, limit: 12 });
    articles = response.articles || [];
  } catch (error) {
    console.error("Error fetching viral articles:", error);
  }
  let initialViewMode = "grid";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Virales", "description": "Las noticias m\xE1s virales y compartidas en El Mundo Viral" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4"> <!-- Page Header --> <div class="bg-white border border-gray-200 rounded-lg p-6 mb-6"> <div class="flex items-center mb-4"> <div class="h-16 w-16 rounded-full overflow-hidden mr-4 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg> </div> <div> <h1 class="text-2xl font-bold text-gray-900 mb-1">Virales</h1> <div class="text-gray-500 text-sm">${articles.length} publicaciones</div> </div> </div> <p class="text-gray-700">Las noticias más compartidas y comentadas que se han hecho virales en redes sociales. Contenido que ha alcanzado gran difusión en poco tiempo.</p> </div> <!-- Filter Toggle on Mobile --> <div class="flex justify-between items-center mb-6"> ${renderComponent($$result2, "ViewToggle", $$ViewToggle, { "activeView": initialViewMode })} <button id="showFilterBtn" class="flex items-center text-gray-600 md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"></path> </svg>
Filtrar
</button> </div> <!-- Grid/List --> <div class="grid grid-cols-1 md:grid-cols-4 gap-6"> <!-- Sidebar with filters (Desktop) --> <div class="hidden md:block md:col-span-1"> <div class="sticky top-20"> ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, {})} </div> </div> <!-- Main content --> <div class="md:col-span-3"> ${articles.length > 0 ? renderTemplate`<div id="articleContainer" class="grid-layout grid grid-cols-1 md:grid-cols-2 gap-6"> ${articles.map((article) => renderTemplate`${renderComponent($$result2, "NewsCard", $$NewsCard, { "article": article, "viewMode": initialViewMode })}`)} </div>` : renderTemplate`<div class="bg-white border border-gray-200 rounded-lg p-8 text-center"> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <h3 class="mt-2 text-lg font-medium text-gray-900">No hay artículos virales</h3> <p class="mt-1 text-gray-500">Vuelve más tarde para ver los contenidos más virales.</p> </div>`} </div> </div> <!-- Mobile Filter Modal --> <div id="filterModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden"> <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-5 transform transition-transform duration-300 translate-y-full" id="filterContent"> <div class="flex justify-between items-center mb-4"> <h3 class="text-lg font-bold">Filtros</h3> <button id="closeFilterBtn" class="text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div> ${renderComponent($$result2, "CategoryFilter", $$CategoryFilter, {})} </div> <div class="mt-4 flex justify-end"> <button id="applyFilterBtn" class="bg-primary-600 text-white px-4 py-2 rounded-lg">Aplicar</button> </div> </div> </div> </div> ` })} `;
}, "/home/project/src/pages/virales.astro", void 0);

const $$file = "/home/project/src/pages/virales.astro";
const $$url = "/virales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Virales,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
