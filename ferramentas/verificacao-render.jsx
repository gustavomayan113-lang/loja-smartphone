import { renderToString } from 'react-dom/server'
import App from '../src/App.jsx'

const PAGINAS = [
  { hash: '#/', esperado: 'Seu próximo' },
  { hash: '#/catalogo', esperado: 'Escolha seu celular' },
  { hash: '#/catalogo?marca=iPhone', esperado: 'iPhone' },
  { hash: '#/celular/iphone-15-pro-max', esperado: 'Especificações do iPhone 15 Pro Max' },
  { hash: '#/celular/galaxy-s24-ultra', esperado: 'Galaxy S24 Ultra' },
  { hash: '#/celular/galaxy-s24', esperado: 'Especificações do Galaxy S24' },
  { hash: '#/celular/motorola-edge-50-neo', esperado: 'Motorola Edge 50 Neo' },
  { hash: '#/celular/moto-g54-5g', esperado: 'Moto G54 5G' },
  { hash: '#/celular/moto-g84-5g', esperado: 'Ficha técnica' },
  { hash: '#/sobre', esperado: 'loja de celulares feita para mostrar' },
  { hash: '#/contato', esperado: 'Formulário de contato' },
  { hash: '#/pagina-inexistente', esperado: 'Esse endereço não existe' },
]

const PROIBIDO = ['sacola', 'Adicionar à sacola']

export function verificar() {
  const falhas = []

  for (const pagina of PAGINAS) {
    window.location.hash = pagina.hash
    const html = renderToString(<App />)
    const temImagem = /<img/.test(html)
    const passou = html.includes(pagina.esperado) && temImagem && html.length > 2000

    if (!passou) {
      falhas.push(`${pagina.hash} (tamanho ${html.length}, imagens ${temImagem})`)
    }

    for (const termo of PROIBIDO) {
      if (html.includes(termo)) falhas.push(`${pagina.hash} ainda contém "${termo}"`)
    }
  }

  window.location.hash = '#/'
  const home = renderToString(<App />)
  if (!home.includes('/img/fotos/')) falhas.push('a home não usa fotos reais')
  if (!home.includes('WhatsApp')) falhas.push('a home não tem o botão de WhatsApp')

  window.location.hash = '#/celular/iphone-15-pro-max'
  const produto = renderToString(<App />)
  if (!produto.includes('fotos/iphone-15-pro-max-frente.jpg')) {
    falhas.push('a página do produto não carrega a foto real')
  }
  if (!produto.includes('Wikimedia Commons')) falhas.push('falta o crédito das fotos no produto')

  return { total: PAGINAS.length, falhas }
}