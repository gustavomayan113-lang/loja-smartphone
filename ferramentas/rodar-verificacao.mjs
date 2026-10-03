/**
 * Verificacao de renderizacao: monta cada pagina em memoria e confere se o HTML saiu completo.
 * Uso:
 *   npx vite build --ssr ferramentas/verificacao-render.jsx --outDir .verificacao
 *   node ferramentas/rodar-verificacao.mjs
 */
const armazenamento = {
  getItem: () => null,
  setItem: () => {},
}

globalThis.window = {
  location: { hash: '#/' },
  scrollTo: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (id) => clearTimeout(id),
  localStorage: armazenamento,
  print: () => {},
}

globalThis.localStorage = armazenamento
globalThis.document = {
  querySelectorAll: () => [],
  querySelector: () => null,
  getElementById: () => null,
}

globalThis.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const { verificar } = await import('../.verificacao/verificacao-render.js')
const { total, falhas } = verificar()

if (falhas.length === 0) {
  console.log(`ok: ${total} paginas renderizadas sem erro.`)
  process.exit(0)
}

console.error(`falha em ${falhas.length} de ${total} paginas:`)
falhas.forEach((falha) => console.error(' -', falha))
process.exit(1)