import { Link } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { CELULARES, MARCAS } from '../../src/dados/catalogo.js'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-grade">
          <div className="rodape-sobre">
            <Link para="/" className="marca">
              <img src="/img/gerais/logo-caell.svg" alt="" width="38" height="38" />
              <span>
                Caell Store
                <small>Smartphones</small>
              </span>
            </Link>
            <p>
              Loja fictícia de smartphones criada como projeto de portfólio. Catálogo, imagens,
              especificações, preço e pagamento são apenas demonstração.
            </p>
            <div className="redes">
              <a href="#/contato" aria-label="Instagram da loja">
                <Icone nome="instagram" tamanho={19} />
              </a>
              <a href="#/sobre" aria-label="Portfólio no GitHub">
                <Icone nome="github" tamanho={19} />
              </a>
              <a href="#/contato" aria-label="Falar no WhatsApp">
                <Icone nome="whatsapp" tamanho={19} />
              </a>
              <a href="#/sobre" aria-label="LinkedIn da equipe">
                <Icone nome="linkedin" tamanho={19} />
              </a>
            </div>
          </div>

          <div>
            <h4>Catálogo</h4>
            <div className="rodape-links">
              <Link para="/catalogo">Todos os celulares</Link>
              {MARCAS.map((marca) => (
                <Link key={marca.id} para={`/catalogo?marca=${marca.nome}`}>
                  {marca.nome}
                </Link>
              ))}
              <Link para="/catalogo?ordem=popular">Mais vendidos</Link>
            </div>
          </div>

          <div>
            <h4>Institucional</h4>
            <div className="rodape-links">
              <Link para="/sobre">Sobre a loja</Link>
              <Link para="/sobre#equipe">Equipe do projeto</Link>
              <Link para="/sobre#como-funciona">Como funciona a compra</Link>
              <Link para="/contato">Fale com a gente</Link>
              <Link para="/catalogo?preco=ate-2000">Até R$ 2.000</Link>
            </div>
          </div>

          <div>
            <h4>Ajuda</h4>
            <div className="rodape-links">
              <Link para="/contato#duvidas">Perguntas frequentes</Link>
              <Link para="/contato#garantia">Garantia e trocas</Link>
              <Link para="/contato#pagamento">Formas de pagamento</Link>
              <Link para="/contato#entrega">Prazos de entrega</Link>
            </div>
          </div>
        </div>

        <div className="rodape-base">
          <span>
            <strong>Caell Store</strong> · projeto de portfólio, loja 100% fictícia.
          </span>
          <span>
            {CELULARES.length} modelos exibidos · © {ano} · feito com React
          </span>
        </div>
      </div>
    </footer>
  )
}