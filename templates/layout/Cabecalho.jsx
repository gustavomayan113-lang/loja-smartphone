import { useEffect, useState } from 'react'
import { Link, ehAtivo } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { MARCAS } from '../../src/dados/catalogo.js'

const LINKS = [
  { para: '/', rotulo: 'Início' },
  { para: '/catalogo', rotulo: 'Catálogo' },
  { para: '/sobre', rotulo: 'A loja' },
  { para: '/contato', rotulo: 'Contato' },
]

export function Cabecalho({ rota, totalFavoritos, aoAbrirFavoritos }) {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    setMenuAberto(false)
  }, [rota.caminho])

  const itemDoMenu = (linha) => (
    <li key={linha.para}>
      <Link
        para={linha.para}
        className={ehAtivo(rota, linha.para) ? 'ativo' : ''}
        aria-current={ehAtivo(rota, linha.para) ? 'page' : undefined}
      >
        {linha.rotulo}
        <Icone nome="setaDiagonal" tamanho={15} />
      </Link>
    </li>
  )

  return (
    <header className={`cabecalho ${rolou ? 'solid' : ''}`}>
      <div className="container cabecalho-conteudo">
        <Link para="/" className="marca" aria-label="Caell Store, ir para o início">
          <img src="/img/gerais/logo-caell.svg" alt="" width="38" height="38" />
          <span>
            Caell Store
            <small>Smartphones</small>
          </span>
        </Link>

        <nav className="navegacao" aria-label="Navegação principal">
          {LINKS.map((linha) => (
            <Link key={linha.para} para={linha.para} className={ehAtivo(rota, linha.para) ? 'ativo' : ''}>
              {linha.rotulo}
            </Link>
          ))}
        </nav>

        <div className="acoes-cabecalho">
          <Link para="/catalogo" className="icone-botao" aria-label="Ir para o catálogo">
            <Icone nome="busca" tamanho={20} />
          </Link>

          <button
            type="button"
            className="icone-botao"
            onClick={aoAbrirFavoritos}
            aria-label={`Ver favoritos. ${totalFavoritos} salvos`}
          >
            <Icone nome="coracao" tamanho={20} />
            {totalFavoritos > 0 && <span className="contador">{totalFavoritos}</span>}
          </button>

          <button
            type="button"
            className={`menu-hamburguer ${menuAberto ? 'aberto' : ''}`}
            onClick={() => setMenuAberto((valor) => !valor)}
            aria-expanded={menuAberto}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`menu-mobile ${menuAberto ? 'aberto' : ''}`}>
        <div className="container">
          <ul>{LINKS.map(itemDoMenu)}</ul>
          <div className="grupo-marcas">
            {MARCAS.map((marca) => (
              <Link
                key={marca.id}
                para={`/catalogo?marca=${marca.nome}`}
                className={rota.consulta.get('marca') === marca.nome ? 'ativo' : ''}
              >
                {marca.nome}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}