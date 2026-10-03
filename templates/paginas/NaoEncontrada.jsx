import { Link } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { ImagemProduto } from '../componentes/ImagemProduto.jsx'
import { CELULARES } from '../../src/dados/catalogo.js'

export function NaoEncontrada() {
  const sugestoes = CELULARES.slice(0, 4)

  return (
    <section className="container pagina-erro">
      <span className="codigo">404</span>
      <span className="selo">Página não encontrada</span>
      <h1>Esse endereço não existe por aqui</h1>
      <p style={{ maxWidth: '48ch' }}>
        O link pode estar errado ou o aparelho saiu do catálogo. Volte para o catálogo e escolha um
        dos {CELULARES.length} celulares disponíveis.
      </p>
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link para="/catalogo" className="botao botao-primario">
          <Icone nome="celular" tamanho={18} />
          Ir para o catálogo
        </Link>
        <Link para="/" className="botao botao-secundario">
          Voltar ao início
        </Link>
      </div>

      <div className="grade-produtos" style={{ marginTop: '2.6rem', width: '100%' }}>
        {sugestoes.map((celular) => (
          <Link
            key={celular.slug}
            para={`/celular/${celular.slug}`}
            className="cartao produto revelar"
          >
            <div className="produto-imagem" style={{ cursor: 'pointer' }}>
              <ImagemProduto imagem={celular.imagens[0]} className="produto-foto" />
            </div>
            <div className="produto-corpo">
              <span className="produto-marca">{celular.marca}</span>
              <h3 className="produto-nome">{celular.nome}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}