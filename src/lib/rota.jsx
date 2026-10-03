import { useEffect, useState } from 'react'

export function lerRota() {
  const bruto = window.location.hash.replace(/^#/, '') || '/'
  const [caminho, consulta] = bruto.split('?')
  const partes = caminho.split('/').filter(Boolean)
  return { caminho, partes, consulta: new URLSearchParams(consulta || '') }
}

export function usarRota() {
  const [rota, setRota] = useState(lerRota)

  useEffect(() => {
    const aoMudar = () => setRota(lerRota())
    window.addEventListener('hashchange', aoMudar)
    return () => window.removeEventListener('hashchange', aoMudar)
  }, [])

  return rota
}

export function Link({ para, className = '', children, ...resto }) {
  return (
    <a href={`#${para}`} className={className} {...resto}>
      {children}
    </a>
  )
}

export function ehAtivo(rota, caminhoEsperado) {
  if (caminhoEsperado === '/') return rota.caminho === '/'
  return rota.caminho.startsWith(caminhoEsperado)
}