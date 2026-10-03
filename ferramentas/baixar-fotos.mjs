/**
 * Baixa as fotos reais do catalogo a partir do Wikimedia Commons (licencas livres).
 *
 *   node ferramentas/baixar-fotos.mjs            -> salva em static/img/fotos
 *   node ferramentas/baixar-fotos.mjs --candidatas -> salva em pasta temporaria para conferencia
 *
 * As imagens ficam em static/img/fotos e sao usadas na vitrine, no card e na galeria.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const modoCandidatas = process.argv.includes('--candidatas')
const filtro = process.argv.find((argumento) => argumento.startsWith('--somente='))
const SAIDA = modoCandidatas
  ? join(process.env.TEMP || '.', 'kilo', 'fotos')
  : join(RAIZ, 'static', 'img', 'fotos')

const CABECALHOS = { 'User-Agent': 'CaellStorePortfolio/1.0 (projeto de portfolio)' }
const LARGURA_POR_ARQUIVO = {
  'motorola-edge-50-neo-frente.jpg': 700,
  'motorola-edge-50-neo-traseira.jpg': 700,
}

const LARGURA_PADRAO = 900
const LARGURA = LARGURA_PADRAO
const ESPERA_MS = 1800

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const MANIFESTO = [
  {
    arquivo: 'iphone-15-pro-max-frente.jpg',
    titulo: 'File:About iPhone 15 Pro Max Natural Titanium.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'iphone-15-pro-max-traseira.jpg',
    titulo: 'File:Back view of iPhone 15 Pro Max Natural titanium.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'iphone-15-pro-frente.jpg',
    titulo: 'File:IPhone 15 pro model.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'iphone-15-pro-traseira.jpg',
    titulo: 'File:Back view of iPhone 15 Pro Natural titanium.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'iphone-15-frente.jpg',
    titulo: 'File:About iPhone 15 Blue.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'iphone-15-traseira.jpg',
    titulo: 'File:Back view of iPhone 15 Blue.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'iphone-se-3-frente.jpg',
    titulo: 'File:IPhone SE 3rd Gen.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'iphone-se-3-traseira.jpg',
    titulo: 'File:Back of the iPhone SE (3rd generation).jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'galaxy-s24-ultra-frente.jpg',
    titulo: 'File:SAMSUNG Galaxy S24 Ultra.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'galaxy-s24-ultra-traseira.jpg',
    titulo: 'File:Back view of Samsung Galaxy S24 Ultra Black.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'galaxy-s24-frente.jpg',
    titulo: 'File:Samsung Galaxy S24 01.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'galaxy-s24-traseira.jpg',
    titulo: 'File:Samsung Galaxy S24 02.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'galaxy-a55-frente.jpg',
    titulo: 'File:Samsung Galaxy A55 5G 2024 (cropped).jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'galaxy-a55-traseira.jpg',
    titulo: 'File:Samsung Galaxy A55 5G 2024.jpg',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'motorola-edge-50-neo-frente.png',
    titulo: 'File:Motorola Edge 50 Neo Front View Nautical Blue.png',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'motorola-edge-50-neo-traseira.png',
    titulo: 'File:Motorola Edge 50 Neo Nautical Blue Rear View.png',
    credito: 'Wikimedia Commons',
  },
  {
    arquivo: 'moto-g54-frente.jpg',
    titulo: 'File:Moto G54 5G.jpg',
    credito: 'Wikimedia Commons',
  },
]

async function pedir(consulta, tentativas = 3) {
  for (let tentativa = 1; tentativa <= tentativas; tentativa += 1) {
    await esperar(ESPERA_MS)

    const resposta = await fetch(consulta, { headers: CABECALHOS })

    if (resposta.status === 429) {
      console.log('  … limite de requisições, aguardando')
      await esperar(ESPERA_MS * 3)
      continue
    }

    if (!resposta.ok) throw new Error(`API respondeu ${resposta.status}`)
    return resposta
  }

  throw new Error('API continuou respondendo 429')
}

const CANDIDATAS = [
  {
    arquivo: '_cand-iphone-15-pro-a.jpg',
    titulo: 'File:IPhone 15 pro model.jpg',
  },
  {
    arquivo: '_cand-iphone-15-pro-b.png',
    titulo: 'File:IPhone 15 pro.png',
  },
  {
    arquivo: '_cand-iphone-15-pro-c.jpg',
    titulo: 'File:IPhone 15 Pro & iPhone 15 Pro Max.jpg',
  },
  {
    arquivo: '_cand-iphone-15-pro-d.jpg',
    titulo: 'File:About iPhone 15 Pro Natural Titanium.jpg',
  },
  {
    arquivo: '_cand-moto-g54-b.jpg',
    titulo: 'File:Moto G54 5G (1).jpg',
  },
]

async function gerarUrl(item) {
  const largura = LARGURA_POR_ARQUIVO[item.arquivo] || LARGURA
  const consulta =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo' +
    `&iiprop=url|size|extmetadata&iiurlwidth=${largura}&titles=${encodeURIComponent(item.titulo)}`

  const dados = await (await pedir(consulta)).json()
  const pagina = Object.values(dados.query.pages)[0]

  if (!pagina || !pagina.imageinfo) throw new Error('arquivo não encontrado no Commons')

  const info = pagina.imageinfo[0]
  const autor = info.extmetadata?.Artist?.value?.replace(/<[^>]+>/g, '').trim()
  const licenca = info.extmetadata?.LicenseShortName?.value?.trim()

  const original = info.thumburl || info.url
  const caminho = original.split('?')[0]

  // miniatura PNG do Commons pode ser pedida em JPEG, bem mais leve
  const querJpeg =
    /\.png$/i.test(item.arquivo) && caminho.includes('/thumb/') && caminho.endsWith('.png')
  const url = querJpeg ? `${original}.jpg` : original

  return {
    url,
    arquivoFinal: /\.png$/i.test(item.arquivo) && querJpeg
      ? item.arquivo.replace(/\.png$/i, '.jpg')
      : item.arquivo,
    autor: autor || 'Wikimedia Commons',
    licenca: licenca || 'licença livre',
  }
}

async function baixar(item) {
  const { url, arquivoFinal, autor, licenca } = await gerarUrl(item)
  const destino = join(SAIDA, arquivoFinal)
  mkdirSync(dirname(destino), { recursive: true })

  const resposta = await fetch(url, { headers: CABECALHOS })

  if (!resposta.ok) throw new Error(`download respondeu ${resposta.status}`)

  const buffer = Buffer.from(await resposta.arrayBuffer())
  writeFileSync(destino, buffer)

  console.log(
    `  ✓ ${arquivoFinal} (${Math.round(buffer.length / 1024)} kB) — ${autor} / ${licenca}`
  )
}

mkdirSync(SAIDA, { recursive: true })

const desejadas = filtro
  ? filtro
      .split('=')[1]
      .split(',')
      .map((nome) => nome.trim())
  : null

const lista = filtro
  ? MANIFESTO.filter((item) => desejadas.some((termo) => item.arquivo.includes(termo)))
  : MANIFESTO

const alvos = [...lista, ...(process.argv.includes('--candidatas') ? CANDIDATAS : [])]

console.log(`baixando ${alvos.length} foto(s) para ${SAIDA}`)

for (const item of alvos) {
  try {
    await baixar(item)
  } catch (erro) {
    console.error(`  ✗ ${item.arquivo}: ${erro.message}`)
  }
}

console.log('pronto.')