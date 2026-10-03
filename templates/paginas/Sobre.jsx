import { Link } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { Acordeao, Estatisticas, ListaCheck, SecaoCabecalho } from '../componentes/Blocos.jsx'
import { CELULARES, CREDITOS_FOTOS, EQUIPE, MARCAS, PERGUNTAS } from '../../src/dados/catalogo.js'

const TECNOLOGIAS = [
  {
    nome: 'React 18',
    cor: '#38bdf8',
    texto: 'Componentes reutilizáveis separados por página dentro de templates/.',
  },
  {
    nome: 'Vite',
    cor: '#a78bfa',
    texto: 'Servidor de desenvolvimento rápido e build otimizado para publicar.',
  },
  {
    nome: 'CSS puro',
    cor: '#f472b6',
    texto: 'Variáveis, grid responsivo e animações em static/css, sem frameworks.',
  },
  {
    nome: 'Fotos reais',
    cor: '#34d399',
    texto: 'Fotos dos aparelhos baixadas do Wikimedia Commons, com crédito em cada página.',
  },
  {
    nome: 'SVG gerado',
    cor: '#f472b6',
    texto: 'As ilustrações de câmera e as artes do site foram geradas por script próprio.',
  },
]

export function Sobre() {
  return (
    <>
      <section className="pagina-cabecalho">
        <div className="container">
          <nav className="migalhas" aria-label="Você está em">
            <Link para="/">Início</Link>
            <Icone nome="chevron" tamanho={14} />
            <span>A loja</span>
          </nav>
          <span className="selo">Sobre o projeto</span>
          <h1>Uma loja de celulares feita para mostrar como penso em interface</h1>
          <p>
            A Caell Store é uma loja fictícia de smartphones criada como projeto de portfólio.
            Não há banco de dados, cobrança real nem envio de produtos: o objetivo é demonstrar
            uma vitrine completa, organizada e fácil de navegar, com imagens e especificações de
            cada aparelho.
          </p>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grade-sobre">
            <div className="revelar">
              <span className="selo">Como navegar</span>
              <h2>Três caminhos para chegar no celular</h2>
              <p style={{ margin: '0.9rem 0 1.3rem' }}>
                A navegação foi pensada para que qualquer visitante saiba onde clicar. No topo
                ficam o catálogo, a loja e o contato; na home existem blocos por marca; e cada
                card leva direto para a página do aparelho.
              </p>
              <ListaCheck
                itens={[
                  'Menu fixo no topo com atalho para o catálogo em qualquer página',
                  'Blocos por marca (iPhone, Galaxy e Motorola) na home e no rodapé',
                  'Cards com imagem grande, preço e botão "ver celular e especificações"',
                  'Página do aparelho com galeria de 3 fotos e ficha técnica por categoria',
                  'Filtros por marca, faixa de preço, lançamento e mais vendidos',
                  'Layout pensado primeiro para o celular, com menu próprio em telas pequenas',
                ]}
              />
            </div>

            <div className="revelar" style={{ display: 'grid', gap: '1rem' }}>
              {TECNOLOGIAS.map((item) => (
                <div
                  key={item.nome}
                  className="cartao"
                  style={{ padding: '1.1rem 1.2rem', display: 'flex', gap: '0.9rem', alignItems: 'center' }}
                >
                  <span
                    className="banner-icone"
                    style={{ color: item.cor, boxShadow: `0 0 0 1px ${item.cor}44` }}
                  >
                    <Icone nome="raio" tamanho={20} />
                  </span>
                  <span>
                    <strong style={{ display: 'block' }}>{item.nome}</strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--texto-fraco)' }}>{item.texto}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <Estatisticas
            itens={[
              { valor: `${CELULARES.length}`, rotulo: 'aparelhos catalogados' },
              { valor: `${MARCAS.length}`, rotulo: 'marcas representadas' },
              { valor: `${CELULARES.length * 3}`, rotulo: 'imagens geradas' },
              { valor: '100%', rotulo: 'responsivo' },
            ]}
          />
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} id="organizacao">
        <div className="container">
          <SecaoCabecalho
            selo="Organização do código"
            titulo="Pastas separadas para ficar fácil de entender"
            descricao="Templates guardam as telas e os componentes; static guarda estilos, imagens e scripts auxiliares."
          />
          <div className="grade-produtos">
            {[
              {
                pasta: 'templates/',
                titulo: 'Telas e componentes',
                itens: [
                  'layout/ — cabeçalho, menu mobile e rodapé',
                  'paginas/ — Início, Catálogo, Produto, Sobre e Contato',
                  'componentes/ — cards, ícones e blocos reutilizáveis',
                ],
              },
              {
                pasta: 'static/',
                titulo: 'Estilos e imagens',
                itens: [
                  'css/ — base, layout, componentes e páginas',
                  'img/fotos/ — fotos reais de cada celular (Wikimedia Commons)',
                  'img/phones/ — ilustrações de frente, traseira e câmeras',
                  'img/gerais/ — logo, fundo decorativo e artes',
                ],
              },
              {
                pasta: 'src/',
                titulo: 'Núcleo do projeto',
                itens: [
                  'dados/catalogo.js — modelos, especificações e preços',
                  'lib/ — rotas, formatação de valores e animações',
                  'ferramentas/ — scripts que baixam as fotos e geram os SVGs',
                ],
              },
            ].map((bloco) => (
              <div className="cartao revelar" key={bloco.pasta} style={{ padding: '1.5rem' }}>
                <span className="produto-marca">{bloco.pasta}</span>
                <h3 style={{ margin: '0.4rem 0 0.9rem' }}>{bloco.titulo}</h3>
                <ul className="lista-check">
                  {bloco.itens.map((item) => (
                    <li key={item}>
                      <Icone nome="checar" tamanho={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} id="creditos">
        <div className="container">
          <SecaoCabecalho
            selo="Créditos"
            titulo="De onde vêm as imagens"
            descricao="As fotos dos aparelhos são reais, baixadas do Wikimedia Commons sob licença livre. As ilustrações das câmeras foram geradas por script para este projeto."
          />
          <div className="cartao revelar" style={{ padding: '1.6rem' }}>
            <ul className="creditos">
              {CREDITOS_FOTOS.map((credito) => (
                <li key={credito}>
                  <Icone nome="camera" tamanho={17} />
                  <span>{credito}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '1rem', fontSize: '0.86rem' }}>
              Licenças: CC BY-SA 4.0 e CC BY 4.0. Os arquivos ficam em{' '}
              <code>static/img/fotos</code> e podem ser baixados novamente com{' '}
              <code>npm run fotos</code>. Para trocar as imagens, edite o manifesto em{' '}
              <code>ferramentas/baixar-fotos.mjs</code>.
            </p>
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} id="equipe">
        <div className="container">
          <SecaoCabecalho
            selo="Quem fez"
            titulo="Equipe do projeto"
            descricao="Divisão de responsabilidades dentro do trabalho de portfólio."
          />
          <div className="grade-equipe">
            {EQUIPE.map((pessoa) => (
              <div className="equipe-cartao revelar" key={pessoa.nome}>
                <img src={pessoa.imagem} alt={`Foto de ${pessoa.nome}`} width="92" height="92" loading="lazy" />
                <h3>{pessoa.nome}</h3>
                <span>{pessoa.cargo}</span>
                <p>{pessoa.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grade-sobre">
            <div className="revelar">
              <span className="selo">Compromissos da loja</span>
              <h2>O que a Caell Store promete</h2>
              <p style={{ margin: '0.9rem 0 1.3rem' }}>
                Mesmo sendo uma demonstração, a interface foi construída seguindo as mesmas regras de
                uma loja real: preço visível, ficha técnica completa, condições de compra e canal de
                atendimento.
              </p>
              <Link para="/catalogo" className="botao botao-primario">
                Ver o catálogo
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