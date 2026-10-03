/**
 * gerador de imagens do portfolio Caell Store
 * cria os SVGs do catalogo (frente / traseira / detalhe) + artes geraes
 * execute com: node ferramentas/gerar-imagens.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const IMG = join(RAIZ, 'static', 'img')

const TELAS = [
  {
    slug: 'iphone-15-pro-max',
    familia: 'iPhone 15 Pro Max',
    camera: 'prisma3',
    acabamento: { a: '#c3ccd6', b: '#7a8492', c: '#3b434d', brilho: '#eef3f8' },
    parede: ['#20304f', '#4b2a6b', '#0a0f1c'],
  },
  {
    slug: 'iphone-15-pro',
    familia: 'iPhone 15 Pro',
    camera: 'prisma3',
    acabamento: { a: '#9db3c9', b: '#54708a', c: '#26333f', brilho: '#cfe2f5' },
    parede: ['#0d3f45', '#13a89c', '#03202a'],
  },
  {
    slug: 'iphone-15',
    familia: 'iPhone 15',
    camera: 'dupla-vertical',
    acabamento: { a: '#ffd0dd', b: '#eb8ba6', c: '#a4506b', brilho: '#fff2f6' },
    parede: ['#4d1b41', '#cd4a80', '#180a16'],
  },
  {
    slug: 'iphone-se-3',
    familia: 'iPhone SE 3',
    camera: 'simples',
    acabamento: { a: '#59636f', b: '#242c36', c: '#101720', brilho: '#9fb0c1' },
    parede: ['#14243f', '#356694', '#060e1a'],
  },
  {
    slug: 'galaxy-s24-ultra',
    familia: 'Galaxy S24 Ultra',
    camera: 'quadrada',
    acabamento: { a: '#6a7078', b: '#2f343b', c: '#14171b', brilho: '#c8ced6' },
    parede: ['#12161c', '#434c5c', '#05070a'],
  },
  {
    slug: 'galaxy-s24',
    familia: 'Galaxy S24',
    camera: 'tripla-solta',
    acabamento: { a: '#9aa3ae', b: '#4e555f', c: '#23282e', brilho: '#dbe2ea' },
    parede: ['#22333f', '#5486ae', '#0a141c'],
  },
  {
    slug: 'galaxy-a55-5g',
    familia: 'Galaxy A55 5G',
    camera: 'tripla-solta',
    acabamento: { a: '#8fb3e0', b: '#3f72ab', c: '#1d3557', brilho: '#e2efff' },
    parede: ['#123a5e', '#2f8ac7', '#05182a'],
  },
  {
    slug: 'motorola-edge-50-ultra',
    familia: 'Motorola Edge 50 Ultra',
    camera: 'dupla-diagonal',
    acabamento: { a: '#4d8f70', b: '#24554a', c: '#0f2b26', brilho: '#bff0d8', textura: 'couro' },
    parede: ['#0e3a2c', '#2fa274', '#03201a'],
  },
  {
    slug: 'motorola-edge-50-neo',
    familia: 'Motorola Edge 50 Neo',
    camera: 'dupla-diagonal',
    acabamento: { a: '#5b93b8', b: '#2c5570', c: '#12293a', brilho: '#cfe9ff' },
    parede: ['#0f2f47', '#3f8fbf', '#041520'],
  },
  {
    slug: 'moto-g54-5g',
    familia: 'Moto G54 5G',
    camera: 'dupla-pill',
    acabamento: { a: '#9fb6c9', b: '#4a6076', c: '#1e2a35', brilho: '#e2f0fa' },
    parede: ['#16303f', '#3f6f8f', '#08131b'],
  },
  {
    slug: 'moto-g84-5g',
    familia: 'Moto G84 5G',
    camera: 'dupla-pill',
    acabamento: { a: '#ddcef3', b: '#a48fd6', c: '#6a5aa0', brilho: '#f6efff' },
    parede: ['#2c2050', '#8367b1', '#120d24'],
  },
  {
    slug: 'moto-g34-5g',
    familia: 'Moto G34 5G',
    camera: 'dupla-pill',
    acabamento: { a: '#98a0ac', b: '#4a515b', c: '#20252c', brilho: '#dfe6ee' },
    parede: ['#1e2935', '#4f6680', '#090f16'],
  },
]

const numero = (n) => Number(n.toFixed(2))

function lente(cx, cy, r) {
  return `
    <g class="lente">
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${numero(r + 8)}" fill="url(#aro)" opacity="0.95"/>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${numero(r + 3)}" fill="#0a0d12"/>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${numero(r)}" fill="url(#vidro)"/>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${numero(r * 0.58)}" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.4"/>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${numero(r * 0.3)}" fill="rgba(8,12,18,0.9)"/>
      <ellipse cx="${numero(cx - r * 0.34)}" cy="${numero(cy - r * 0.42)}" rx="${numero(r * 0.3)}" ry="${numero(r * 0.19)}"
        fill="rgba(255,255,255,0.5)" transform="rotate(-32 ${numero(cx)} ${numero(cy)})"/>
    </g>`
}

function flash(cx, cy, r = 11) {
  return `
    <g>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${r + 3}" fill="rgba(255,255,255,0.14)"/>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${r}" fill="url(#aro)"/>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${numero(r * 0.62)}" fill="#fff6d8"/>
      <circle cx="${numero(cx)}" cy="${numero(cy)}" r="${numero(r * 0.3)}" fill="#ffffff"/>
    </g>`
}

function moduloCamera(tipo, x, y, escala = 1) {
  const e = escala
  switch (tipo) {
    case 'prisma3':
      return `
        <g>
          <rect x="${numero(x - 68 * e)}" y="${numero(y - 68 * e)}" width="${numero(136 * e)}" height="${numero(136 * e)}"
            rx="${numero(40 * e)}" fill="url(#plataforma)"/>
          ${lente(x - 32 * e, y - 32 * e, 29 * e)}
          ${lente(x + 32 * e, y - 32 * e, 29 * e)}
          ${lente(x - 32 * e, y + 32 * e, 29 * e)}
          ${flash(x + 36 * e, y + 34 * e, 10 * e)}
          <circle cx="${numero(x + 36 * e)}" cy="${numero(y - 36 * e)}" r="${numero(9 * e)}" fill="rgba(12,16,22,0.9)"/>
        </g>`
    case 'dupla-vertical':
      return `
        <g>
          <rect x="${numero(x - 38 * e)}" y="${numero(y - 80 * e)}" width="${numero(76 * e)}" height="${numero(160 * e)}"
            rx="${numero(38 * e)}" fill="url(#plataforma)"/>
          ${lente(x, y - 34 * e, 29 * e)}
          ${lente(x, y + 36 * e, 29 * e)}
          ${flash(x + 74 * e, y - 44 * e, 10 * e)}
        </g>`
    case 'simples':
      return `
        <g>
          <rect x="${numero(x - 66 * e)}" y="${numero(y - 66 * e)}" width="${numero(132 * e)}" height="${numero(132 * e)}"
            rx="${numero(38 * e)}" fill="url(#plataforma)"/>
          ${lente(x - 8 * e, y - 6 * e, 33 * e)}
          ${flash(x + 46 * e, y + 42 * e, 10 * e)}
        </g>`
    case 'quadrada':
      return `
        <g>
          ${lente(x - 40 * e, y - 40 * e, 33 * e)}
          ${lente(x + 40 * e, y - 40 * e, 33 * e)}
          ${lente(x - 40 * e, y + 40 * e, 33 * e)}
          ${lente(x + 40 * e, y + 40 * e, 33 * e)}
          ${flash(x, y + 2 * e, 10 * e)}
        </g>`
    case 'tripla-solta':
      return `
        <g>
          ${lente(x - 38 * e, y - 38 * e, 31 * e)}
          ${lente(x + 38 * e, y - 38 * e, 31 * e)}
          ${lente(x, y + 44 * e, 31 * e)}
          ${flash(x - 74 * e, y + 60 * e, 10 * e)}
        </g>`
    case 'dupla-diagonal':
      return `
        <g>
          <rect x="${numero(x - 66 * e)}" y="${numero(y - 66 * e)}" width="${numero(132 * e)}" height="${numero(132 * e)}"
            rx="${numero(38 * e)}" fill="url(#plataforma)"/>
          ${lente(x - 30 * e, y - 30 * e, 30 * e)}
          ${lente(x + 30 * e, y + 30 * e, 30 * e)}
          ${flash(x + 40 * e, y - 32 * e, 10 * e)}
        </g>`
    case 'dupla-pill':
      return `
        <g>
          <rect x="${numero(x - 34 * e)}" y="${numero(y - 74 * e)}" width="${numero(68 * e)}" height="${numero(148 * e)}"
            rx="${numero(34 * e)}" fill="url(#plataforma)"/>
          ${lente(x, y - 32 * e, 26 * e)}
          ${lente(x, y + 32 * e, 26 * e)}
          ${flash(x + 70 * e, y - 42 * e, 9 * e)}
        </g>`
    default:
      return ''
  }
}

function textura(tipo) {
  if (tipo === 'couro') {
    return {
      id: 'grao',
      def: `
      <pattern id="grao" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.3" fill="rgba(255,255,255,0.07)"/>
        <circle cx="8" cy="7" r="1.5" fill="rgba(0,0,0,0.16)"/>
        <path d="M0 10 Q6 7 12 10" stroke="rgba(255,255,255,0.05)" stroke-width="1" fill="none"/>
      </pattern>`,
    }
  }

  return {
    id: 'escovado',
    def: `
    <pattern id="escovado" width="4" height="4" patternUnits="userSpaceOnUse">
      <path d="M0 0 H4" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <path d="M0 2 H4" stroke="rgba(0,0,0,0.07)" stroke-width="1"/>
    </pattern>`,
  }
}

function defsComuns() {
  return `
  <radialGradient id="aro" cx="35%" cy="28%" r="80%">
    <stop offset="0%" stop-color="#f2f6fb"/>
    <stop offset="45%" stop-color="#9aa5b1"/>
    <stop offset="100%" stop-color="#2a3138"/>
  </radialGradient>
  <radialGradient id="vidro" cx="38%" cy="30%" r="75%">
    <stop offset="0%" stop-color="#5c7c9e"/>
    <stop offset="42%" stop-color="#1b2735"/>
    <stop offset="100%" stop-color="#05080d"/>
  </radialGradient>
  <linearGradient id="plataforma" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="rgba(255,255,255,0.30)"/>
    <stop offset="55%" stop-color="rgba(255,255,255,0.10)"/>
    <stop offset="100%" stop-color="rgba(0,0,0,0.22)"/>
  </linearGradient>
  <linearGradient id="reflexo" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="rgba(255,255,255,0.32)"/>
    <stop offset="45%" stop-color="rgba(255,255,255,0.04)"/>
    <stop offset="100%" stop-color="rgba(255,255,255,0.16)"/>
  </linearGradient>
  <linearGradient id="vinheta" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="rgba(0,0,0,0.28)"/>
    <stop offset="35%" stop-color="rgba(0,0,0,0)"/>
    <stop offset="100%" stop-color="rgba(0,0,0,0.32)"/>
  </linearGradient>
  <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="42"/>
  </filter>
  <filter id="sombra" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="16"/>
  </filter>
  <filter id="macia" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>`
}

function moldura(fone, id) {
  const ac = fone.acabamento
  return `
  <linearGradient id="corpo-${id}" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${ac.a}"/>
    <stop offset="38%" stop-color="${ac.b}"/>
    <stop offset="72%" stop-color="${ac.c}"/>
    <stop offset="100%" stop-color="${ac.b}"/>
  </linearGradient>
  <linearGradient id="corpo-vertical-${id}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="rgba(255,255,255,0.22)"/>
    <stop offset="22%" stop-color="rgba(255,255,255,0)"/>
    <stop offset="72%" stop-color="rgba(0,0,0,0.10)"/>
    <stop offset="100%" stop-color="rgba(255,255,255,0.16)"/>
  </linearGradient>
  <radialGradient id="brilho-${id}" cx="50%" cy="45%" r="55%">
    <stop offset="0%" stop-color="${ac.brilho}" stop-opacity="0.30"/>
    <stop offset="60%" stop-color="${ac.brilho}" stop-opacity="0.06"/>
    <stop offset="100%" stop-color="${ac.brilho}" stop-opacity="0"/>
  </radialGradient>`
}

function icones() {
  const apps = []
  const tons = [0.9, 0.55, 0.75, 0.4, 0.85, 0.6]
  for (let linha = 0; linha < 4; linha++) {
    for (let col = 0; col < 4; col++) {
      const x = 258 + col * 52
      const y = 470 + linha * 52
      apps.push(
        `<rect x="${x}" y="${y}" width="40" height="40" rx="11" fill="rgba(255,255,255,${tons[(linha * 4 + col) % tons.length] * 0.34})"/>`
      )
    }
  }
  return apps.join('\n      ')
}

function frente(fone) {
  const id = fone.slug
  const p = fone.parede
  const bl = fone.acabamento.brilho
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 900" width="720" height="900" role="img" aria-label="${fone.familia} frente">
  <defs>
    ${defsComuns()}
    ${moldura(fone, id)}
    <linearGradient id="papel-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p[0]}"/>
      <stop offset="55%" stop-color="${p[1]}"/>
      <stop offset="100%" stop-color="${p[2]}"/>
    </linearGradient>
    <radialGradient id="halo-${id}" cx="50%" cy="48%" r="52%">
      <stop offset="0%" stop-color="${bl}" stop-opacity="0.26"/>
      <stop offset="65%" stop-color="${bl}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${bl}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="tela-${id}">
      <rect x="228" y="118" width="264" height="596" rx="46"/>
    </clipPath>
    <linearGradient id="brilhoTela-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0.22)"/>
      <stop offset="42%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.10)"/>
    </linearGradient>
  </defs>

  <ellipse cx="360" cy="470" rx="290" ry="360" fill="url(#halo-${id})"/>
  <ellipse cx="360" cy="792" rx="168" ry="24" fill="rgba(0,0,0,0.55)" filter="url(#sombra)"/>

  <g>
    <rect x="204" y="206" width="8" height="26" rx="4" fill="url(#corpo-${id})"/>
    <rect x="204" y="256" width="8" height="42" rx="4" fill="url(#corpo-${id})"/>
    <rect x="204" y="312" width="8" height="42" rx="4" fill="url(#corpo-${id})"/>
    <rect x="508" y="272" width="8" height="66" rx="4" fill="url(#corpo-${id})"/>

    <rect x="212" y="100" width="296" height="632" rx="56" fill="url(#corpo-${id})"/>
    <rect x="212" y="100" width="296" height="632" rx="56" fill="url(#corpo-vertical-${id})"/>
    <rect x="212.75" y="100.75" width="294.5" height="630.5" rx="55" fill="none" stroke="rgba(255,255,255,0.34)" stroke-width="1.5"/>

    <rect x="228" y="118" width="264" height="596" rx="46" fill="url(#papel-${id})"/>
    <g clip-path="url(#tela-${id})">
      <ellipse cx="300" cy="270" rx="190" ry="170" fill="${p[1]}" opacity="0.95" filter="url(#soft)"/>
      <ellipse cx="470" cy="520" rx="200" ry="190" fill="${p[0]}" opacity="0.9" filter="url(#soft)"/>
      <ellipse cx="330" cy="690" rx="230" ry="150" fill="${p[2]}" opacity="0.95" filter="url(#soft)"/>
      <path d="M228 118 H492 V300 Q400 380 228 300 Z" fill="rgba(255,255,255,0.06)"/>
      ${icones()}
      <rect x="316" y="676" width="88" height="5" rx="2.5" fill="rgba(255,255,255,0.7)"/>
    </g>
    <rect x="228" y="118" width="264" height="596" rx="46" fill="url(#brilhoTela-${id})"/>
    <rect x="228" y="118" width="264" height="596" rx="46" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>

    <rect x="322" y="134" width="76" height="24" rx="12" fill="#05070b"/>
    <circle cx="341" cy="146" r="5" fill="#101a2a"/>
    <circle cx="341" cy="146" r="2" fill="#2b4a6b"/>

    <text x="360" y="240" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif"
      font-size="52" font-weight="300" fill="rgba(255,255,255,0.94)" letter-spacing="1">9:41</text>
    <text x="360" y="272" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif"
      font-size="15" font-weight="500" fill="rgba(255,255,255,0.62)">quinta-feira, 3 de outubro</text>

    <path d="M300 118 L492 118 L492 200 Q400 260 300 200 Z" fill="rgba(255,255,255,0.10)"/>
  </g>
</svg>
`
}

function traseira(fone) {
  const id = fone.slug
  const ac = fone.acabamento
  const tec = textura(ac.textura)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 900" width="720" height="900" role="img" aria-label="${fone.familia} traseira">
  <defs>
    ${defsComuns()}
    ${tec.def}
    ${moldura(fone, id)}
    <clipPath id="corpoRecorte-${id}">
      <rect x="212" y="100" width="296" height="632" rx="56"/>
    </clipPath>
  </defs>

  <ellipse cx="360" cy="470" rx="290" ry="360" fill="url(#brilho-${id})"/>
  <ellipse cx="360" cy="792" rx="168" ry="24" fill="rgba(0,0,0,0.55)" filter="url(#sombra)"/>

  <g>
    <rect x="204" y="256" width="8" height="42" rx="4" fill="url(#corpo-${id})"/>
    <rect x="204" y="312" width="8" height="42" rx="4" fill="url(#corpo-${id})"/>
    <rect x="508" y="272" width="8" height="66" rx="4" fill="url(#corpo-${id})"/>

    <rect x="212" y="100" width="296" height="632" rx="56" fill="url(#corpo-${id})"/>
    <g clip-path="url(#corpoRecorte-${id})">
      <rect x="212" y="100" width="296" height="632" fill="url(#${tec.id})"/>
      <ellipse cx="300" cy="180" rx="230" ry="260" fill="rgba(255,255,255,0.14)" filter="url(#soft)"/>
      <ellipse cx="470" cy="700" rx="220" ry="240" fill="rgba(0,0,0,0.30)" filter="url(#soft)"/>
      <path d="M212 100 H508 V732 H212 Z" fill="url(#vinheta)"/>
      <path d="M230 100 L470 732 L390 732 L150 100 Z" fill="url(#reflexo)" opacity="0.5"/>
    </g>
    <rect x="212.75" y="100.75" width="294.5" height="630.5" rx="55" fill="none" stroke="rgba(255,255,255,0.30)" stroke-width="1.5"/>

    ${moduloCamera(fone.camera, 300, 205)}

    <g opacity="0.85">
      <circle cx="360" cy="470" r="26" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2"/>
      <path d="M348 470 Q360 456 372 470 Q360 484 348 470 Z" fill="rgba(255,255,255,0.7)"/>
    </g>
    <text x="360" y="676" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif"
      font-size="17" font-weight="600" letter-spacing="3" fill="rgba(255,255,255,0.55)">${fone.familia.toUpperCase()}</text>
  </g>
</svg>
`
}

function detalhe(fone) {
  const id = fone.slug
  const p = fone.parede
  const ac = fone.acabamento
  const tec = textura(ac.textura)

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720" width="720" height="720" role="img" aria-label="${fone.familia} detalhe das câmeras">
  <defs>
    ${defsComuns()}
    ${tec.def}
    ${moldura(fone, id)}
    <linearGradient id="fundo-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${p[2]}"/>
      <stop offset="50%" stop-color="${p[0]}"/>
      <stop offset="100%" stop-color="#04060a"/>
    </linearGradient>
    <radialGradient id="halo-${id}" cx="50%" cy="42%" r="58%">
      <stop offset="0%" stop-color="${ac.brilho}" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="${ac.brilho}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="reflexoLente-${id}" cx="30%" cy="24%" r="72%">
      <stop offset="0%" stop-color="#bfe4ff" stop-opacity="0.95"/>
      <stop offset="42%" stop-color="#4a6ea8" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#04060a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="borda-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0.42)"/>
      <stop offset="45%" stop-color="rgba(255,255,255,0.06)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.26)"/>
    </linearGradient>
    <clipPath id="painel-${id}">
      <rect x="70" y="52" width="580" height="616" rx="86"/>
    </clipPath>
    <filter id="desfoque-${id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="60"/>
    </filter>
  </defs>

  <rect width="720" height="720" fill="url(#fundo-${id})"/>
  <ellipse cx="200" cy="180" rx="260" ry="240" fill="${ac.brilho}" opacity="0.2" filter="url(#desfoque-${id})"/>
  <ellipse cx="600" cy="620" rx="240" ry="220" fill="${p[1]}" opacity="0.42" filter="url(#desfoque-${id})"/>
  <rect width="720" height="720" fill="url(#halo-${id})" opacity="0.5"/>

  <rect x="94" y="76" width="532" height="568" rx="76" fill="rgba(0,0,0,0.45)" filter="url(#sombra)"/>

  <g clip-path="url(#painel-${id})">
    <rect x="70" y="52" width="580" height="616" fill="url(#corpo-${id})"/>
    <rect x="70" y="52" width="580" height="616" fill="url(#${tec.id})" opacity="0.9"/>
    <rect x="70" y="52" width="580" height="616" fill="url(#corpo-vertical-${id})"/>
    <ellipse cx="250" cy="180" rx="330" ry="330" fill="rgba(255,255,255,0.16)" filter="url(#soft)"/>
    <ellipse cx="620" cy="700" rx="300" ry="300" fill="rgba(0,0,0,0.34)" filter="url(#soft)"/>
    <rect x="70" y="52" width="580" height="616" fill="url(#vinheta)"/>
    <path d="M70 52 H650 V300 Q360 420 70 300 Z" fill="rgba(255,255,255,0.07)"/>
    <path d="M130 52 L520 668 L392 668 L20 52 Z" fill="url(#reflexo)" opacity="0.5"/>
  </g>
  <rect x="70.75" y="52.75" width="578.5" height="614.5" rx="85" fill="none" stroke="url(#borda-${id})" stroke-width="2"/>

  <g transform="translate(346 300) rotate(-6) scale(2.05) translate(-300 -205)">
    ${moduloCamera(fone.camera, 300, 205)}
    <g>
      ${lenteRealcada(fone.camera, 300, 205)}
    </g>
  </g>

  <g opacity="0.75">
    <circle cx="360" cy="596" r="0" />
  </g>
</svg>
`
}

function lenteRealcada(tipo, cx, cy) {
  const posicoes = {
    prisma3: [
      [cx - 32, cy - 32],
      [cx + 32, cy - 32],
      [cx - 32, cy + 32],
    ],
    'dupla-vertical': [
      [cx, cy - 34],
      [cx, cy + 36],
    ],
    simples: [[cx - 8, cy - 6]],
    quadrada: [
      [cx - 40, cy - 40],
      [cx + 40, cy - 40],
      [cx - 40, cy + 40],
      [cx + 40, cy + 40],
    ],
    'tripla-solta': [
      [cx - 38, cy - 38],
      [cx + 38, cy - 38],
      [cx, cy + 44],
    ],
    'dupla-diagonal': [
      [cx - 30, cy - 30],
      [cx + 30, cy + 30],
    ],
    'dupla-pill': [
      [cx, cy - 32],
      [cx, cy + 32],
    ],
  }[tipo] || [[cx, cy]]

  const raios = { simples: 33, quadrada: 33, 'tripla-solta': 31, prisma3: 29, 'dupla-diagonal': 30, 'dupla-vertical': 29, 'dupla-pill': 26 }

  return posicoes
    .map(([x, y]) => {
      const r = raios[tipo]
      return `<circle cx="${x}" cy="${y}" r="${r * 2.4}" fill="url(#reflexoLente)" opacity="0.28"/>`
    })
    .join('\n      ')
}

function meshLancamentos() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 700" width="1600" height="700" role="img" aria-label="Fundo decorativo">
  <defs>
    <linearGradient id="fundo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#131a3a"/>
      <stop offset="50%" stop-color="#2b1160"/>
      <stop offset="100%" stop-color="#071022"/>
    </linearGradient>
    <radialGradient id="b1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="b3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f472b6" stop-opacity="0.65"/>
      <stop offset="100%" stop-color="#f472b6" stop-opacity="0"/>
    </radialGradient>
    <filter id="borrar" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="70"/>
    </filter>
    <pattern id="grade" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M46 0 H0 V46" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1600" height="700" fill="url(#fundo)"/>
  <g filter="url(#borrar)">
    <ellipse cx="360" cy="240" rx="380" ry="300" fill="url(#b1)"/>
    <ellipse cx="1180" cy="200" rx="340" ry="280" fill="url(#b2)"/>
    <ellipse cx="820" cy="620" rx="420" ry="260" fill="url(#b3)"/>
  </g>
  <rect width="1600" height="700" fill="url(#grade)"/>
</svg>
`
}

function logoMarca() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" role="img" aria-label="Caell Store">
  <defs>
    <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a78bfa"/>
      <stop offset="50%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#f472b6"/>
    </linearGradient>
  </defs>
  <rect x="6" y="6" width="108" height="108" rx="32" fill="url(#lg)"/>
  <rect x="40" y="22" width="40" height="72" rx="12" fill="#070b16" opacity="0.9"/>
  <rect x="45" y="27" width="30" height="62" rx="8" fill="url(#lg)" opacity="0.95"/>
  <circle cx="60" cy="98" r="4" fill="#070b16" opacity="0.85"/>
</svg>
`
}

function avatar(nome, a, b) {
  const inicial = nome.charAt(0)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400" role="img" aria-label="${nome}">
  <defs>
    <linearGradient id="fundo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <clipPath id="recorte">
      <circle cx="200" cy="200" r="200"/>
    </clipPath>
  </defs>
  <g clip-path="url(#recorte)">
    <rect width="400" height="400" fill="url(#fundo)"/>
    <circle cx="200" cy="168" r="74" fill="rgba(255,255,255,0.92)"/>
    <path d="M40 400 Q200 246 360 400 Z" fill="rgba(255,255,255,0.92)"/>
    <text x="200" y="196" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif"
      font-size="74" font-weight="700" fill="${b}">${inicial}</text>
  </g>
</svg>
`
}

function salvar(caminhoRelativo, conteudo) {
  const destino = join(IMG, caminhoRelativo)
  mkdirSync(dirname(destino), { recursive: true })
  writeFileSync(destino, conteudo, 'utf8')
  console.log('  ✓', caminhoRelativo)
}

console.log('gerando imagens...')
for (const fone of TELAS) {
  salvar(join('phones', `${fone.slug}-frente.svg`), frente(fone))
  salvar(join('phones', `${fone.slug}-traseira.svg`), traseira(fone))
  salvar(join('phones', `${fone.slug}-detalhe.svg`), detalhe(fone))
}
salvar(join('gerais', 'mesh-lancamentos.svg'), meshLancamentos())
salvar(join('gerais', 'logo-caell.svg'), logoMarca())
salvar(join('equipe', 'ana.svg'), avatar('Ana', '#8b5cf6', '#1e1b4b'))
salvar(join('equipe', 'bruno.svg'), avatar('Bruno', '#06b6d4', '#083344'))
salvar(join('equipe', 'carla.svg'), avatar('Carla', '#f472b6', '#4c1d3f'))
console.log('imagens geradas com sucesso.')