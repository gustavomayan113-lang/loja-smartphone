import { useEffect } from 'react'

export function useRevelar() {
  useEffect(() => {
    const alvos = document.querySelectorAll('.revelar:not(.visivel)')
    if (!('IntersectionObserver' in window)) {
      alvos.forEach((alvo) => alvo.classList.add('visivel'))
      return undefined
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel')
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    alvos.forEach((alvo) => observador.observe(alvo))
    return () => observador.disconnect()
  })
}

export function useAncorarNoTopo(chave) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [chave])
}