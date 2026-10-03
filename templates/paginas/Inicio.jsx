import { Link } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { CartaoProduto } from '../componentes/CartaoProduto.jsx'
import { Acordeao, Banners, Depoimentos, Estatisticas, Passos, SecaoCabecalho } from '../componentes/Blocos.jsx'
import { BANNERS, CELULARES, DEPOIMENTOS, MARCAS, PERGUNTAS, lancamentos, maisVendidos } from '../../src/dados/catalogo.js'

export function Inicio({ favoritos, aoFavoritar, aoWhatsApp }) {
  const destaques = lancamentos().slice(0, 4)
  const populares = maisVendidos().slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-centro revelar">
            <span className="selo">Loja de smartphones · iPhone, Samsung e Motorola</span>
            <h1>
              Seu próximo <span className="destaque">celular</span> com ficha técnica
              completa.
            </h1>
            <p className="hero-texto">
              Compare {CELULARES.length} modelos com fotos reais, cores disponíveis e todas as
              especificações em um só lugar. Toque no aparelho desejado para ver frente, traseira,
              câmeras e a ficha completa — e, se gostar, fale com a loja pelo WhatsApp.
            </p>

            <div className="hero-acoes">
              <Link para="/catalogo" className="botao botao-primario">
                Ver catálogo completo
                <Icone nome="seta" tamanho={18} />
              </Link>
              <Link para="/catalogo?marca=iPhone" className="botao botao-secundario">
                <Icone nome="celular" tamanho={18} />
                Começar pelos iPhones
              </Link>
            </div>

            <div className="hero-confianca">
              <div>
                <Icone nome="checar" tamanho={18} />
                Projeto de portfólio, sem compra real
              </div>
              <div>
                <Icone nome="checar" tamanho={18} />
                100% novo e lacrado
              </div>
              <div>
                <Icone nome="checar" tamanho={18} />
                Garantia de 12 meses
              </div>
              <div>
                <Icone nome="checar" tamanho={18} />
                Troca em 7 dias
              </div>
            </div>

            <div className="hero-marcas" aria-label="Atalhos por marca">
              <span>Ou vá direto para:</span>
              {MARCAS.map((marca) => (
                <Link key={marca.id} para={`/catalogo?marca=${marca.nome}`} className="hero-marca">
                  {marca.nome}
                  <span>{marca.quantidade} modelos</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <Banners itens={BANNERS} />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="faixa-marcas">
            <span>Apple</span>
            <span>Samsung</span>
            <span>Motorola</span>
            <span>iOS 17</span>
            <span>Android 14</span>
            <span>5G</span>
          </div>
        </div>
      </section>

      <section className="secao" id="marcas" style={{ paddingTop: 0 }}>
        <div className="container">
          <SecaoCabecalho
            selo="Escolha sua marca"
            titulo="Três marcas, um jeito fácil de comparar"
            descricao="Toque na marca para ver só os aparelhos daquele fabricante."
          />
          <div className="grade-marcas">
            {MARCAS.map((marca) => (
              <Link
                key={marca.id}
                para={`/catalogo?marca=${marca.nome}`}
                className="marca-cartao revelar"
                style={{ '--cor-marca': marca.cor, '--cor-marca2': marca.cor2 }}
              >
                <span className="marca-icone">
                  <Icone nome="celular" tamanho={28} />
                </span>
                <span className="marca-info">
                  <h3>{marca.nome}</h3>
                  <span>
                    {marca.quantidade} modelos · {marca.marca}
                  </span>
                  <span className="seta">
                    Ver modelos <Icone nome="seta" tamanho={15} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <SecaoCabecalho
            selo="Lançamentos"
            titulo="Acabaram de chegar"
            descricao="Os aparelhos mais novos do catálogo, com ficha técnica completa e envio rápido."
          >
            <Link para="/catalogo?filtro=lancamentos" className="botao botao-secundario">
              Ver todos
              <Icone nome="seta" tamanho={17} />
            </Link>
          </SecaoCabecalho>

          <div className="grade-produtos">
            {destaques.map((celular) => (
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

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="banner-lancamentos revelar">
            <img src="/img/gerais/mesh-lancamentos.svg" alt="" width="1600" height="700" />
            <div className="banner-lancamentos-conteudo">
              <span className="selo">Seleção da semana</span>
              <h2>Top de linha com desconto de até 16%</h2>
              <ul>
                <li>
                  <Icone nome="checar" tamanho={17} />
                  iPhone 15 Pro Max com câmera de 48 MP
                </li>
                <li>
                  <Icone nome="checar" tamanho={17} />
                  Galaxy S24 Ultra com S Pen e tela QHD+
                </li>
                <li>
                  <Icone nome="checar" tamanho={17} />
                  Motorola Edge 50 Ultra com carga de 125 W
                </li>
              </ul>
              <div>
                <Link para="/catalogo" className="botao botao-primario">
                  Comparar modelos
                  <Icone nome="seta" tamanho={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <SecaoCabecalho
            selo="Mais vendidos"
            titulo="O que todo mundo está levando"
            descricao="Ranking atualizado com os aparelhos mais procurados da Caell Store."
          >
            <Link para="/catalogo?ordem=popular" className="botao botao-secundario">
              Ver ranking
              <Icone nome="seta" tamanho={17} />
            </Link>
          </SecaoCabecalho>

          <div className="grade-produtos">
            {populares.map((celular) => (
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

      <section className="secao" style={{ paddingTop: 0 }} id="como-funciona">
        <div className="container">
          <SecaoCabecalho
            selo="Como funciona"
            titulo="Três passos para escolher bem"
            descricao="Navegação simples: você sempre sabe onde clicar para ver o aparelho de perto."
          />
          <Passos
            itens={[
              {
                titulo: 'Escolha a marca',
                texto:
                  'Use os botões de marca no catálogo ou o menu do topo para filtrar apenas iPhone, Galaxy ou Motorola.',
              },
              {
                titulo: 'Abra o celular',
                texto:
                  'Cada card leva à página do aparelho com fotos da frente, traseira e das câmeras.',
              },
              {
                titulo: 'Leia a ficha técnica',
                texto:
                  'Tela, chip, memória, bateria, câmeras, sistema e garantia organizados em uma tabela fácil de ler.',
              },
            ]}
          />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <Estatisticas
            itens={[
              { valor: `${CELULARES.length}`, rotulo: 'modelos no catálogo' },
              { valor: '3', rotulo: 'marcas com ficha completa' },
              { valor: `${CELULARES.length * 3}`, rotulo: 'imagens no catálogo' },
              { valor: '4,8', rotulo: 'nota média dos aparelhos' },
            ]}
          />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <SecaoCabecalho
            selo="Quem comprou"
            titulo="Clientes satisfeitos"
            descricao="Comentários de demonstração para mostrar como a loja aparece para quem compra."
          />
          <Depoimentos itens={DEPOIMENTOS} />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grade-sobre">
            <div className="revelar">
              <span className="selo">Dúvidas frequentes</span>
              <h2>Tudo o que você precisa saber antes de comprar</h2>
              <p style={{ marginTop: '0.8rem', marginBottom: '1.4rem' }}>
                Se ficar qualquer dúvida, a central de atendimento responde de segunda a sábado.
              </p>
              <Link para="/contato" className="botao botao-primario">
                Falar com o atendimento
                <Icone nome="seta" tamanho={17} />
              </Link>
            </div>
            <div className="revelar">
              <Acordeao itens={PERGUNTAS} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}