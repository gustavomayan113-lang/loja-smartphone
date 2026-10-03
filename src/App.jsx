import { useCallback, useEffect, useState } from 'react'
import { Cabecalho } from '../templates/layout/Cabecalho.jsx'
import { Rodape } from '../templates/layout/Rodape.jsx'
import { Icone } from '../templates/componentes/Icone.jsx'
import { ModalWhatsapp } from '../templates/componentes/ModalWhatsapp.jsx'
import { Inicio } from '../templates/paginas/Inicio.jsx'
import { Catalogo } from '../templates/paginas/Catalogo.jsx'
import { Produto } from '../templates/paginas/Produto.jsx'
import { Sobre } from '../templates/paginas/Sobre.jsx'
import { Contato } from '../templates/paginas/Contato.jsx'
import { NaoEncontrada } from '../templates/paginas/NaoEncontrada.jsx'
import { CELULARES, buscarCelular } from './dados/catalogo.js'
import { usarRota } from './lib/rota.jsx'
import { useRevelar } from './lib/hooks.js'
import { preco } from './lib/formato.js'

const CHAVE_FAVORITOS = 'caell:favoritos'

function lerArmazenamento(chave, padrao) {
  try {
    const bruto = window.localStorage.getItem(chave)
    return bruto ? JSON.parse(bruto) : padrao
  } catch {
    return padrao
  }
}

function resumirCelular(celular) {
  const mapa = celular.especificacoes
    .flatMap((grupo) => grupo.itens)
    .reduce((acumulado, item) => ({ ...acumulado, [item.rotulo]: item.valor }), {})

  return [
    { rotulo: 'Tela', valor: mapa.Tamanho || mapa.Tecnologia },
    { rotulo: 'Chip', valor: mapa.Chip },
    { rotulo: 'Memória RAM', valor: mapa['Memória RAM'] },
    { rotulo: 'Armazenamento', valor: mapa.Armazenamento },
    { rotulo: 'Bateria', valor: mapa.Capacidade },
    { rotulo: 'Sistema', valor: mapa.Sistema },
    { rotulo: 'Preço', valor: preco(celular.preco) },
  ].filter((linha) => linha.valor)
}

function Aviso({ aviso, aoFechar }) {
  useEffect(() => {
    const temporizador = window.setTimeout(aoFechar, 4200)
    return () => window.clearTimeout(temporizador)
  }, [aviso, aoFechar])

  return (
    <div className="aviso" role="status">
      <Icone nome="checar" tamanho={20} />
      <span>
        <strong>{aviso.titulo}</strong>
        <span>{aviso.texto}</span>
      </span>
    </div>
  )
}

function PainelComparacao({ celular, aoFechar }) {
  const [segundo, setSegundo] = useState('')

  const opcoes = CELULARES.filter((item) => item.slug !== celular.slug)
  const outro = CELULARES.find((item) => item.slug === segundo)
  const linhas = resumirCelular(celular)
  const linhasOutro = outro ? resumirCelular(outro) : []

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Comparar celulares"
      onClick={aoFechar}
      className="comparacao-fundo"
    >
      <div
        className="cartao comparacao-painel"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className="comparacao-topo">
          <div>
            <span className="selo">Comparar</span>
            <h2 style={{ fontSize: '1.5rem' }}>{celular.nome}</h2>
          </div>
          <button type="button" className="icone-botao" onClick={aoFechar} aria-label="Fechar comparação">
            <Icone nome="troca" tamanho={20} />
          </button>
        </div>

        <div className="campo" style={{ marginTop: '1.2rem' }}>
          <label htmlFor="segundo-celular">Comparar com</label>
          <select
            id="segundo-celular"
            value={segundo}
            onChange={(evento) => setSegundo(evento.target.value)}
          >
            <option value="">Escolha um segundo aparelho</option>
            {opcoes.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.nome}
              </option>
            ))}
          </select>
        </div>

        {outro && (
          <div className="comparacao-tabela">
            <table>
              <thead>
                <tr>
                  <th scope="col">Especificação</th>
                  <th scope="col">{celular.nome}</th>
                  <th scope="col">{outro.nome}</th>
                </tr>
              </thead>
              <tbody>
                {linhas.map((linha) => (
                  <tr key={linha.rotulo}>
                    <th scope="row">{linha.rotulo}</th>
                    <td>{linha.valor}</td>
                    <td>{linhasOutro.find((item) => item.rotulo === linha.rotulo)?.valor || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const rota = usarRota()
  const [favoritos, setFavoritos] = useState(() => lerArmazenamento(CHAVE_FAVORITOS, []))
  const [aviso, setAviso] = useState(null)
  const [comparando, setComparando] = useState(null)
  const [whatsapp, setWhatsapp] = useState(null)

  useRevelar()

  useEffect(() => {
    window.localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos))
  }, [favoritos])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [rota.caminho])

  useEffect(() => {
    function aoTeclar(evento) {
      if (evento.key === 'Escape') {
        setComparando(null)
        setWhatsapp(null)
        setAviso(null)
      }
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [])

  const mostrarAviso = useCallback((titulo, texto) => setAviso({ titulo, texto }), [])
  const fecharAviso = useCallback(() => setAviso(null), [])

  const favoritar = useCallback(
    (slug) => {
      setFavoritos((atual) => {
        const celular = buscarCelular(slug)
        if (atual.includes(slug)) {
          mostrarAviso('Removido dos favoritos', celular?.nome ?? '')
          return atual.filter((item) => item !== slug)
        }
        mostrarAviso('Adicionado aos favoritos', celular?.nome ?? '')
        return [...atual, slug]
      })
    },
    [mostrarAviso]
  )

  const abrirWhatsapp = useCallback((celular) => setWhatsapp(celular), [])
  const fecharWhatsapp = useCallback(() => setWhatsapp(null), [])

  const avisarFavoritos = useCallback(() => {
    if (favoritos.length === 0) {
      mostrarAviso('Nenhum favorito ainda', 'Toque no coração de um celular para salvar aqui.')
      return
    }

    const nomes = favoritos
      .map((slug) => buscarCelular(slug)?.nome)
      .filter(Boolean)
      .slice(0, 3)
      .join(', ')

    mostrarAviso(
      `${favoritos.length} favorito${favoritos.length > 1 ? 's' : ''}`,
      favoritos.length > 3 ? `${nomes} e mais...` : nomes
    )
  }, [favoritos, mostrarAviso])

  const comparar = useCallback(
    (celular) => {
      setComparando(celular)
      mostrarAviso('Modo comparação', 'Escolha um segundo aparelho na tabela.')
    },
    [mostrarAviso]
  )

  const fecharComparacao = useCallback(() => setComparando(null), [])

  const slug = rota.partes[1]
  const celular = rota.partes[0] === 'celular' ? buscarCelular(slug) : null

  let conteudo
  if (rota.caminho === '/') {
    conteudo = <Inicio favoritos={favoritos} aoFavoritar={favoritar} aoWhatsApp={abrirWhatsapp} />
  } else if (rota.caminho === '/catalogo') {
    conteudo = (
      <Catalogo
        rota={rota}
        favoritos={favoritos}
        aoFavoritar={favoritar}
        aoWhatsApp={abrirWhatsapp}
      />
    )
  } else if (celular) {
    conteudo = (
      <Produto
        celular={celular}
        favoritos={favoritos}
        aoFavoritar={favoritar}
        aoWhatsApp={abrirWhatsapp}
        aoComparar={comparar}
      />
    )
  } else if (rota.caminho === '/sobre') {
    conteudo = <Sobre />
  } else if (rota.caminho === '/contato') {
    conteudo = <Contato aoAvisar={mostrarAviso} />
  } else {
    conteudo = <NaoEncontrada />
  }

  return (
    <>
      <Cabecalho
        rota={rota}
        totalFavoritos={favoritos.length}
        aoAbrirFavoritos={avisarFavoritos}
      />

      <main id="conteudo">{conteudo}</main>

      <Rodape />

      {aviso && <Aviso aviso={aviso} aoFechar={fecharAviso} />}

      {whatsapp && <ModalWhatsapp celular={whatsapp} aoFechar={fecharWhatsapp} />}

      {comparando && <PainelComparacao celular={comparando} aoFechar={fecharComparacao} />}
    </>
  )
}