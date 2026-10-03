import { Icone } from './Icone.jsx'

export function SecaoCabecalho({ selo, titulo, descricao, children, largura }) {
  return (
    <div className="secao-cabecalho">
      <div className="secao-titulo" style={largura ? { maxWidth: largura } : undefined}>
        {selo && <span className="selo">{selo}</span>}
        <h2>{titulo}</h2>
        {descricao && <p>{descricao}</p>}
      </div>
      {children}
    </div>
  )
}

export function Banners({ itens }) {
  return (
    <div className="grade-banner">
      {itens.map((item) => (
        <div className="banner revelar" key={item.titulo}>
          <span className="banner-icone">
            <Icone nome={item.icone} tamanho={21} />
          </span>
          <span>
            <strong>{item.titulo}</strong>
            <span>{item.texto}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

export function Estatisticas({ itens }) {
  return (
    <div className="grade-stats">
      {itens.map((item) => (
        <div className="stat revelar" key={item.rotulo}>
          <strong>{item.valor}</strong>
          <span>{item.rotulo}</span>
        </div>
      ))}
    </div>
  )
}

export function Passos({ itens }) {
  return (
    <div className="grade-passos">
      {itens.map((item) => (
        <div className="passo revelar" key={item.titulo}>
          <h3>{item.titulo}</h3>
          <p>{item.texto}</p>
        </div>
      ))}
    </div>
  )
}

export function Depoimentos({ itens }) {
  return (
    <div className="grade-depoimentos">
      {itens.map((item) => (
        <figure className="depoimento revelar" key={item.nome}>
          <span className="nota">
            {[1, 2, 3, 4, 5].map((n) => (
              <Icone key={n} nome="estrelaCheia" tamanho={14} />
            ))}
          </span>
          <blockquote className="depoimento-texto">“{item.texto}”</blockquote>
          <figcaption className="depoimento-autor">
            <img src={item.imagem} alt="" width="46" height="46" loading="lazy" />
            <span>
              <strong>{item.nome}</strong>
              <span>cliente verificado</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function Acordeao({ itens }) {
  return (
    <div className="acordeao">
      {itens.map((item) => (
        <details className="acordeao-item" key={item.pergunta}>
          <summary className="acordeao-pergunta">
            {item.pergunta}
            <Icone nome="chevron" tamanho={19} />
          </summary>
          <div className="acordeao-resposta">{item.resposta}</div>
        </details>
      ))}
    </div>
  )
}

export function ListaCheck({ itens }) {
  return (
    <ul className="lista-check">
      {itens.map((item) => (
        <li key={item}>
          <Icone nome="checar" tamanho={18} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}