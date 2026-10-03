import { useState } from 'react'
import { Link } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { CartaoProduto } from '../componentes/CartaoProduto.jsx'
import { ImagemProduto } from '../componentes/ImagemProduto.jsx'
import { SecaoCabecalho } from '../componentes/Blocos.jsx'
import { desconto, parcelas, preco } from '../../src/lib/formato.js'
import { relacionados } from '../../src/dados/catalogo.js'

export function Produto({ celular, favoritos, aoFavoritar, aoWhatsApp, aoComparar }) {
  const [indiceImagem, setIndiceImagem] = useState(0)
  const [indiceCor, setIndiceCor] = useState(0)

  const imagem = celular.imagens[indiceImagem]
  const cor = celular.cores[indiceCor]
  const cupom = desconto(celular.precoAnterior, celular.preco)

  const especificacoesChave = celular.especificacoes
    .flatMap((grupo) => grupo.itens)
    .reduce((acumulado, item) => ({ ...acumulado, [item.rotulo]: item.valor }), {})

  const resumoRapido = [
    { rotulo: 'Tela', valor: especificacoesChave.Tamanho || especificacoesChave['Tecnologia'] },
    { rotulo: 'Memória', valor: especificacoesChave['Armazenamento'] },
    { rotulo: 'RAM', valor: especificacoesChave['Memória RAM'] },
    { rotulo: 'Sistema', valor: especificacoesChave.Sistema },
    { rotulo: 'Peso', valor: especificacoesChave.Peso },
    { rotulo: 'Garantia', valor: especificacoesChave.Garantia },
  ].filter((item) => item.valor)

  return (
    <>
      <section className="pagina-cabecalho" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <nav className="migalhas" aria-label="Você está em">
            <Link para="/">Início</Link>
            <Icone nome="chevron" tamanho={14} />
            <Link para="/catalogo">Catálogo</Link>
            <Icone nome="chevron" tamanho={14} />
            <Link para={`/catalogo?marca=${celular.linha}`}>{celular.linha}</Link>
            <Icone nome="chevron" tamanho={14} />
            <span aria-current="page">{celular.nome}</span>
          </nav>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container produto-detalhe">
          <div className="galeria revelar">
            <div className="galeria-principal">
              <ImagemProduto
                key={imagem.src}
                imagem={imagem}
                className="galeria-foto"
                dimensoes={{ width: 900, height: 1200 }}
              />
              <span className="galeria-controle etiqueta destaque">{imagem.rotulo}</span>
            </div>

            <div className="galeria-miniaturas" role="group" aria-label="Imagens do celular">
              {celular.imagens.map((item, indice) => (
                <button
                  type="button"
                  key={item.src}
                  className={`miniatura ${indice === indiceImagem ? 'ativa' : ''}`}
                  onClick={() => setIndiceImagem(indice)}
                  aria-label={`Ver imagem: ${item.rotulo}`}
                  aria-pressed={indice === indiceImagem}
                >
                  <ImagemProduto imagem={item} className="miniatura-foto" />
                  <span>{item.rotulo}</span>
                </button>
              ))}
            </div>

            <p className="galeria-credito">
              {imagem.credito || 'Ilustração gerada para este projeto'}
            </p>
          </div>

          <div className="produto-info revelar">
            <div className="produto-info-topo">
              <span className="produto-marca">{celular.marca}</span>
              <span className="etiqueta destaque">{celular.selo}</span>
              <span className="nota">
                <Icone nome="estrelaCheia" tamanho={15} />
                {celular.nota} · {celular.avaliacoes} avaliações
              </span>
            </div>

            <h1>{celular.nome}</h1>
            <p className="produto-resumo-grande">{celular.resumo}</p>

            <ul className="lista-destaques">
              {celular.destaques.map((destaque) => (
                <li key={destaque}>
                  <Icone nome="checar" tamanho={18} />
                  <span>{destaque}</span>
                </li>
              ))}
            </ul>

            <div className="grupo-cor">
              <label htmlFor="cor-atual">
                Cor: <span>{cor.nome}</span>
              </label>
              <div className="amostras" id="cor-atual">
                {celular.cores.map((item, indice) => (
                  <button
                    type="button"
                    key={item.nome}
                    className={`amostra ${indice === indiceCor ? 'ativa' : ''}`}
                    style={{ background: item.hex }}
                    onClick={() => setIndiceCor(indice)}
                    aria-label={`Cor ${item.nome}`}
                    title={item.nome}
                    aria-pressed={indice === indiceCor}
                  />
                ))}
              </div>
            </div>

            <div className="bloco-compra">
              <div className="bloco-compra-preco">
                <span className="preco-valor">{preco(celular.preco)}</span>
                {cupom > 0 && <span className="desconto">-{cupom}% hoje</span>}
                <span className="preco-antigo">{preco(celular.precoAnterior)}</span>
              </div>

              <span className="preco-parcelas">
                {parcelas(celular.preco, celular.parcelas)} · Pix com 5% de desconto
              </span>

              {celular.estoque <= 8 && (
                <span className="estoque-baixo">Últimas {celular.estoque} unidades em estoque</span>
              )}

              <div className="linha-compra">
                <button
                  type="button"
                  className="botao botao-whatsapp"
                  onClick={() => aoWhatsApp(celular)}
                >
                  <Icone nome="whatsapp" tamanho={19} />
                  Gostou? Falar no WhatsApp
                </button>
                <button
                  type="button"
                  className="botao botao-secundario"
                  onClick={() => aoFavoritar(celular.slug)}
                >
                  <Icone nome="coracao" tamanho={18} />
                  {favoritos.includes(celular.slug) ? 'Favorito' : 'Favoritar'}
                </button>
              </div>

              <p className="compra-aviso">
                <Icone nome="info" tamanho={16} />
                Loja de portfólio: o botão mostra como seria o contato no WhatsApp, mas nada é
                enviado.
              </p>

              <div className="linha-compra">
                <button type="button" className="botao botao-secundario" onClick={() => aoComparar(celular)}>
                  <Icone nome="comparar" tamanho={18} />
                  Comparar com outro
                </button>
              </div>

              <div className="info-rapida">
                {resumoRapido.slice(0, 4).map((item) => (
                  <div key={item.rotulo}>
                    <span>{item.rotulo}</span>
                    <strong>{item.valor}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '0.8rem' }}>O que você recebe</h3>
              <ul className="lista-check">
                <li>
                  <Icone nome="checar" tamanho={17} />
                  <span>Aparelho novo, lacrado e com cabo de carregamento</span>
                </li>
                <li>
                  <Icone nome="checar" tamanho={17} />
                  <span>Nota fiscal e 12 meses de garantia de fábrica</span>
                </li>
                <li>
                  <Icone nome="checar" tamanho={17} />
                  <span>Frete grátis para todo o Brasil</span>
                </li>
                <li>
                  <Icone nome="checar" tamanho={17} />
                  <span>Primeira troca gratuita em até 7 dias</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} id="especificacoes">
        <div className="container">
          <SecaoCabecalho
            selo="Ficha técnica"
            titulo={`Especificações do ${celular.nome}`}
            descricao="Todos os detalhes técnicos organised por categoria, como nas páginas oficiais das marcas."
          >
            <button
              type="button"
              className="botao botao-secundario"
              onClick={() => window.print()}
            >
              <Icone nome="celular" tamanho={17} />
              Imprimir ficha
            </button>
          </SecaoCabecalho>

          <div className="especificacoes">
            {celular.especificacoes.map((grupo) => (
              <div className="spec-grupo" key={grupo.grupo}>
                <h3>{grupo.grupo}</h3>
                <dl>
                  {grupo.itens.map((item) => (
                    <div className="spec-linha" key={item.rotulo}>
                      <dt>{item.rotulo}</dt>
                      <dd>{item.valor}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <SecaoCabecalho
            selo="Veja também"
            titulo="Quem compara este aparelho também olha"
            descricao="Sugestões da mesma linha e de outras marcas para você decidir melhor."
          />
          <div className="grade-produtos">
            {relacionados(celular).map((item) => (
              <CartaoProduto
                key={item.slug}
                celular={item}
                favoritado={favoritos.includes(item.slug)}
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