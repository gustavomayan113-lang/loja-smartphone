import { useEffect, useMemo, useState } from 'react'
import { Link } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { CartaoProduto } from '../componentes/CartaoProduto.jsx'
import { SecaoCabecalho } from '../componentes/Blocos.jsx'
import { CELULARES, MARCAS } from '../../src/dados/catalogo.js'

const FAIXAS = [
  { id: 'todos', rotulo: 'Todos os celulares' },
  { id: 'ate-2000', rotulo: 'Até R$ 2.000' },
  { id: '2000-5000', rotulo: 'R$ 2.000 a R$ 5.000' },
  { id: 'acima-5000', rotulo: 'Acima de R$ 5.000' },
]

const ORDENS = [
  { id: 'relevancia', rotulo: 'Mais relevantes' },
  { id: 'menor-preco', rotulo: 'Menor preço' },
  { id: 'maior-preco', rotulo: 'Maior preço' },
  { id: 'popular', rotulo: 'Mais vendidos' },
  { id: 'nota', rotulo: 'Melhor avaliados' },
]

function dentroDaFaixa(celular, faixa) {
  if (faixa === 'todos') return true
  if (faixa === 'ate-2000') return celular.preco <= 2000
  if (faixa === '2000-5000') return celular.preco > 2000 && celular.preco <= 5000
  return celular.preco > 5000
}

export function Catalogo({ rota, favoritos, aoFavoritar, aoWhatsApp }) {
  const marcaInicial = rota.consulta.get('marca') || ''
  const ordemInicial = rota.consulta.get('ordem') || 'relevancia'
  const faixaInicial = rota.consulta.get('preco') || 'todos'
  const filtroInicial = rota.consulta.get('filtro') || ''

  const [busca, setBusca] = useState('')
  const [marca, setMarca] = useState(marcaInicial)
  const [ordem, setOrdem] = useState(
    ORDENS.some((item) => item.id === ordemInicial) ? ordemInicial : 'relevancia'
  )
  const [faixa, setFaixa] = useState(
    FAIXAS.some((item) => item.id === faixaInicial) ? faixaInicial : 'todos'
  )
  const [filtro, setFiltro] = useState(filtroInicial)

  const marcaUrl = rota.consulta.get('marca') || ''
  const ordemUrl = rota.consulta.get('ordem') || ''
  const faixaUrl = rota.consulta.get('preco') || ''
  const filtroUrl = rota.consulta.get('filtro') || ''

  useEffect(() => {
    setMarca(marcaUrl)
    setOrdem(ORDENS.some((item) => item.id === ordemUrl) ? ordemUrl : 'relevancia')
    setFaixa(FAIXAS.some((item) => item.id === faixaUrl) ? faixaUrl : 'todos')
    setFiltro(filtroUrl)
  }, [marcaUrl, ordemUrl, faixaUrl, filtroUrl])

  const resultados = useMemo(() => {
    const termo = busca.trim().toLowerCase()

    const lista = CELULARES.filter((celular) => {
      const combinaMarca = !marca || celular.linha === marca
      const combinaFaixa = dentroDaFaixa(celular, faixa)
      const combinaFiltro =
        !filtro ||
        (filtro === 'lancamentos' && celular.novoLancamento) ||
        (filtro === 'popular' && celular.maisVendido)
      const combinaBusca =
        !termo ||
        celular.nome.toLowerCase().includes(termo) ||
        celular.marca.toLowerCase().includes(termo) ||
        celular.resumo.toLowerCase().includes(termo) ||
        celular.destaques.some((destaque) => destaque.toLowerCase().includes(termo))

      return combinaMarca && combinaFaixa && combinaFiltro && combinaBusca
    })

    const ordenados = [...lista]
    if (ordem === 'menor-preco') ordenados.sort((a, b) => a.preco - b.preco)
    if (ordem === 'maior-preco') ordenados.sort((a, b) => b.preco - a.preco)
    if (ordem === 'popular') {
      ordenados.sort((a, b) => Number(b.maisVendido) - Number(a.maisVendido) || b.avaliacoes - a.avaliacoes)
    }
    if (ordem === 'nota') ordenados.sort((a, b) => b.nota - a.nota || b.avaliacoes - a.avaliacoes)

    return ordenados
  }, [busca, marca, ordem, faixa, filtro])

  const totalDaMarca = (linha) => CELULARES.filter((celular) => celular.linha === linha).length

  return (
    <>
      <section className="pagina-cabecalho">
        <div className="container">
          <nav className="migalhas" aria-label="Você está em">
            <Link para="/">Início</Link>
            <Icone nome="chevron" tamanho={14} />
            <span>Catálogo</span>
          </nav>
          <span className="selo">Catálogo completo</span>
          <h1>Escolha seu celular</h1>
          <p>
            Filtre por marca, faixa de preço ou pesquise pelo nome. Cada card abre a página do
            aparelho com fotos, cores e a ficha técnica completa.
          </p>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: '0.6rem' }}>
        <div className="container">
          <div className="barra-filtros">
            <div className="campo-busca">
              <Icone nome="busca" tamanho={18} />
              <input
                type="search"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Buscar por nome, marca ou recurso..."
                aria-label="Buscar celulares"
              />
            </div>

            <select
              className="selecao"
              value={ordem}
              onChange={(evento) => setOrdem(evento.target.value)}
              aria-label="Ordenar resultados"
            >
              {ORDENS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.rotulo}
                </option>
              ))}
            </select>
          </div>

          <div className="barra-filtros" style={{ top: '148px' }}>
            <div className="chips" role="group" aria-label="Filtrar por marca">
              <button
                type="button"
                className={`chip ${marca === '' ? 'ativo' : ''}`}
                onClick={() => setMarca('')}
              >
                Todas as marcas
                <span className="contagem">{CELULARES.length}</span>
              </button>
              {MARCAS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`chip ${marca === item.nome ? 'ativo' : ''}`}
                  onClick={() => setMarca(marca === item.nome ? '' : item.nome)}
                >
                  {item.nome}
                  <span className="contagem">{totalDaMarca(item.nome)}</span>
                </button>
              ))}
            </div>

            <div className="chips" role="group" aria-label="Filtrar por faixa de preço">
              {FAIXAS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`chip ${faixa === item.id ? 'ativo' : ''}`}
                  onClick={() => setFaixa(item.id)}
                >
                  {item.rotulo}
                </button>
              ))}
            </div>

            <div className="chips">
              <button
                type="button"
                className={`chip ${filtro === 'lancamentos' ? 'ativo' : ''}`}
                onClick={() => setFiltro(filtro === 'lancamentos' ? '' : 'lancamentos')}
              >
                <Icone nome="raio" tamanho={15} />
                Lançamentos
              </button>
              <button
                type="button"
                className={`chip ${filtro === 'popular' ? 'ativo' : ''}`}
                onClick={() => setFiltro(filtro === 'popular' ? '' : 'popular')}
              >
                <Icone nome="estrela" tamanho={15} />
                Mais vendidos
              </button>
              {(marca || busca || faixa !== 'todos' || filtro) && (
                <button
                  type="button"
                  className="chip"
                  onClick={() => {
                    setMarca('')
                    setBusca('')
                    setFaixa('todos')
                    setFiltro('')
                  }}
                >
                  <Icone nome="troca" tamanho={15} />
                  Limpar filtros
                </button>
              )}
            </div>
          </div>

          <p className="resultado-contagem" role="status">
            {resultados.length === 0
              ? 'Nenhum celular encontrado com esses filtros.'
              : `${resultados.length} ${resultados.length === 1 ? 'celular encontrado' : 'celulares encontrados'}${
                  marca ? ` da marca ${marca}` : ''
                }.`}
          </p>

          {resultados.length > 0 ? (
            <div className="grade-produtos">
              {resultados.map((celular) => (
                <CartaoProduto
                  key={celular.slug}
                  celular={celular}
                  favoritado={favoritos.includes(celular.slug)}
                  aoFavoritar={aoFavoritar}
                  aoWhatsApp={aoWhatsApp}
                />
              ))}
            </div>
          ) : (
            <div className="cartao" style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
              <h3>Nada por aqui com esses filtros</h3>
              <p style={{ margin: '0.6rem auto 1.4rem', maxWidth: '42ch' }}>
                Tente outra marca, outra faixa de preço ou apague a busca para ver o catálogo
                completo.
              </p>
              <button
                type="button"
                className="botao botao-primario"
                onClick={() => {
                  setMarca('')
                  setBusca('')
                  setFaixa('todos')
                  setFiltro('')
                }}
              >
                <Icone nome="troca" tamanho={17} />
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <SecaoCabecalho
            selo="Não sabe qual escolher?"
            titulo="Compare os três tops de linha"
            descricao="Veja lado a lado os aparelhos com a melhor ficha técnica da loja."
          >
            <Link para="/sobre" className="botao botao-secundario">
              Como comparar
              <Icone nome="seta" tamanho={17} />
            </Link>
          </SecaoCabecalho>

          <div className="grade-produtos">
            {CELULARES.filter((celular) => celular.selo === 'Top de linha').map((celular) => (
              <CartaoProduto
                key={celular.slug}
                celular={celular}
                favoritado={favoritos.includes(celular.slug)}
                aoFavoritar={aoFavoritar}
                aoWhatsApp={aoWhatsApp}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}