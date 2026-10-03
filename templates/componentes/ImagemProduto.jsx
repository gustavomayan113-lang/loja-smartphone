import { useEffect, useState } from 'react'

/**
 * Mostra a foto do aparelho e, se o arquivo nao carregar, usa a ilustracao
 * gerada por script como reserva.
 */
export function ImagemProduto({ imagem, className = '', dimensoes = { width: 900, height: 1200 } }) {
  const [origem, setOrigem] = useState(imagem.src)

  useEffect(() => {
    setOrigem(imagem.src)
  }, [imagem.src])

  const reserva = imagem.reserva || imagem.src

  return (
    <img
      src={origem}
      alt={imagem.alt}
      width={dimensoes.width}
      height={dimensoes.height}
      loading="lazy"
      decoding="async"
      className={className}
      onError={() => {
        if (origem !== reserva) setOrigem(reserva)
      }}
    />
  )
}