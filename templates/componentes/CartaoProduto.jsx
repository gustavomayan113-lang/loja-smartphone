import { Link } from '../../src/lib/rota.jsx'
import { Icone } from './Icone.jsx'
import { ImagemProduto } from './ImagemProduto.jsx'
import { desconto, parcelas, preco } from '../../src/lib/formato.js'

export function CartaoProduto({ celular, favoritado, aoFavoritar, aoWhatsApp }) {
  const imagem = celular.imagens[0]
  const cupom = desconto(celular.precoAnterior, celular.preco)

  return (
    <article className="cartao produto revelar">
      <Link
        para={`/celular/${celular.slug}`}
        className="produto-imagem"
        aria-label={`Ver ${celular.nome} com imagens e especificações`}
      >
        <span className="produto-etiquetas">
          {celular.maisVendido && <span className="etiqueta destaque">Mais vendido</span>}
          {celular.novoLancamento && <span className="etiqueta novo">Novo</span>}
          {!celular.maisVendido && !celular.novoLancamento && (
            <span className="etiqueta">{celular.selo}</span>
          )}
        </span>

        <ImagemProduto imagem={imagem} className="produto-foto" />

        <span className="produto-acao">
          <span className="botao botao-primario botao-bloco">
            Ver mais sobre o celular
            <Icone nome="setaDiagonal" tamanho={17} />
          </span>
        </span>
      </Link>

      <button
        type="button"
        className={`produto-coracao ${favoritado ? 'ativo' : ''}`}
        onClick={() => aoFavoritar(celular.slug)}
        aria-label={
          favoritado
            ? `Remover ${celular.nome} dos favoritos`
            : `Adicionar ${celular.nome} aos favoritos`
        }
        aria-pressed={favoritado}
      >
        <Icone nome="coracao" tamanho={19} />
      </button>

      <div className="produto-corpo">
        <span className="produto-marca">{celular.marca}</span>
        <h3 className="produto-nome">{celular.nome}</h3>
        <p className="produto-resumo">{celular.resumo}</p>

        <div className="produto-specs">
          {celular.especificacoes[0].itens.slice(0, 2).map((item) => (
            <span className="mini-chip" key={item.rotulo}>
              {item.valor}
            </span>
          ))}
          <span className="mini-chip">
            {celular.especificacoes[1].itens.find((item) => item.rotulo === 'Memória RAM')?.valor ||
              celular.especificacoes[1].itens[2].valor}
          </span>
        </div>

        <div className="produto-preco">
          <div>
            <div className="preco-antigo">
              {celular.precoAnterior ? preco(celular.precoAnterior) : ''}
            </div>
            <div className="preco-valor">{preco(celular.preco)}</div>
            <div className="preco-parcelas">{parcelas(celular.preco, celular.parcelas)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="nota">
              <Icone nome="estrelaCheia" tamanho={14} />
              {celular.nota}
            </span>
            {cupom > 0 && (
              <div className="desconto" style={{ marginTop: 6 }}>
                -{cupom}%
              </div>
            )}
          </div>
        </div>

        <div className="produto-botoes">
          <Link
            para={`/celular/${celular.slug}`}
            className="botao botao-secundario"
            aria-label={`Abrir a ficha técnica do ${celular.nome}`}
          >
            <Icone nome="celular" tamanho={17} />
            Ficha técnica
          </Link>

          <button
            type="button"
            className="botao botao-whatsapp"
            onClick={() => aoWhatsApp(celular)}
            aria-label={`Gostou do ${celular.nome}? Falar no WhatsApp`}
          >
            <Icone nome="whatsapp" tamanho={18} />
            WhatsApp
          </button>
        </div>

        {celular.estoque <= 8 && (
          <span className="estoque-baixo">Restam apenas {celular.estoque} unidades</span>
        )}
      </div>
    </article>
  )
}