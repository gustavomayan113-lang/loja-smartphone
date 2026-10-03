import { useState } from 'react'
import { Link } from '../../src/lib/rota.jsx'
import { Icone } from '../componentes/Icone.jsx'
import { Acordeao, SecaoCabecalho } from '../componentes/Blocos.jsx'
import { PERGUNTAS } from '../../src/dados/catalogo.js'

const CANAIS = [
  {
    icone: 'whatsapp',
    titulo: 'WhatsApp',
    detalhe: '(11) 90000-0000',
    texto: 'Atendimento rápido das 9h às 20h, de segunda a sábado.',
  },
  {
    icone: 'email',
    titulo: 'E-mail',
    detalhe: 'ola@caellstore.com.br',
    texto: 'Resposta em até 1 dia útil para dúvidas e pedidos.',
  },
  {
    icone: 'telefone',
    titulo: 'Telefone',
    detalhe: '(11) 3000-0000',
    texto: 'Ligue para falar com um consultor de aparelhos.',
  },
  {
    icone: 'local',
    titulo: 'Endereço fictício',
    detalhe: 'Rua das Lojas, 1000 — São Paulo, SP',
    texto: 'Loja física apenas para demonstração do projeto.',
  },
]

export function Contato({ aoAvisar }) {
  const [campos, setCampos] = useState({ nome: '', email: '', telefone: '', assunto: 'Dúvida sobre um celular', mensagem: '' })
  const [erros, setErros] = useState({})

  function alterar(campo) {
    return (evento) => setCampos((atual) => ({ ...atual, [campo]: evento.target.value }))
  }

  function enviar(evento) {
    evento.preventDefault()
    const novosErros = {}
    if (campos.nome.trim().length < 3) novosErros.nome = 'Escreva seu nome completo.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)) novosErros.email = 'Informe um e-mail válido.'
    if (campos.mensagem.trim().length < 10) novosErros.mensagem = 'Conte um pouco mais sobre sua dúvida.'

    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return

    setCampos({ nome: '', email: '', telefone: '', assunto: 'Dúvida sobre um celular', mensagem: '' })
    aoAvisar('Mensagem enviada', 'Obrigado! Nossa equipe responde em até 1 dia útil.')
  }

  return (
    <>
      <section className="pagina-cabecalho">
        <div className="container">
          <nav className="migalhas" aria-label="Você está em">
            <Link para="/">Início</Link>
            <Icone nome="chevron" tamanho={14} />
            <span>Contato</span>
          </nav>
          <span className="selo">Atendimento</span>
          <h1>Fale com a Caell Store</h1>
          <p>
            Dúvida sobre um aparelho, prazo de entrega ou garantia? Preencha o formulário ou use um
            dos canais ao lado. Este formulário é apenas demonstração: nenhuma mensagem é enviada de
            verdade.
          </p>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container grade-contato">
          <div className="revelar">
            <span className="selo">Canais de atendimento</span>
            <h2>Escolha o que preferir</h2>
            <p style={{ margin: '0.8rem 0 1.3rem' }}>
              Na loja fictícia, todos os canais são demonstrativos — mas a estrutura é a mesma de
              uma loja real.
            </p>

            <div className="contato-lista">
              {CANAIS.map((canal) => (
                <div className="contato-item" key={canal.titulo}>
                  <Icone nome={canal.icone} tamanho={20} />
                  <span>
                    <strong>{canal.titulo}</strong>
                    <span style={{ color: 'var(--texto)' }}>{canal.detalhe}</span>
                    <span>{canal.texto}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mapa-ficticio">
              <strong>Mapa ilustrativo</strong>
              <span>Localização aproximada da loja fictícia — sem mapa real.</span>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Icone nome="local" tamanho={26} />
              </div>
            </div>
          </div>

          <form className="formulario revelar" onSubmit={enviar} noValidate>
            <div>
              <span className="selo">Envie sua mensagem</span>
              <h2>Formulário de contato</h2>
            </div>

            <div className="dupla-campos">
              <div className="campo">
                <label htmlFor="nome">Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  value={campos.nome}
                  onChange={alterar('nome')}
                  placeholder="Seu nome"
                  aria-invalid={Boolean(erros.nome)}
                  aria-describedby={erros.nome ? 'erro-nome' : undefined}
                />
                {erros.nome && (
                  <small id="erro-nome" style={{ color: '#fca5a5' }}>
                    {erros.nome}
                  </small>
                )}
              </div>

              <div className="campo">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  value={campos.email}
                  onChange={alterar('email')}
                  placeholder="voce@email.com"
                  aria-invalid={Boolean(erros.email)}
                  aria-describedby={erros.email ? 'erro-email' : undefined}
                />
                {erros.email && (
                  <small id="erro-email" style={{ color: '#fca5a5' }}>
                    {erros.email}
                  </small>
                )}
              </div>
            </div>

            <div className="dupla-campos">
              <div className="campo">
                <label htmlFor="telefone">Telefone (opcional)</label>
                <input
                  id="telefone"
                  type="tel"
                  value={campos.telefone}
                  onChange={alterar('telefone')}
                  placeholder="(11) 90000-0000"
                />
              </div>

              <div className="campo">
                <label htmlFor="assunto">Assunto</label>
                <select id="assunto" value={campos.assunto} onChange={alterar('assunto')}>
                  <option>Dúvida sobre um celular</option>
                  <option>Pedido e pagamento</option>
                  <option>Entrega e prazo</option>
                  <option>Garantia e troca</option>
                  <option>Outro assunto</option>
                </select>
              </div>
            </div>

            <div className="campo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                value={campos.mensagem}
                onChange={alterar('mensagem')}
                placeholder="Conte o que você precisa saber..."
                aria-invalid={Boolean(erros.mensagem)}
                aria-describedby={erros.mensagem ? 'erro-mensagem' : undefined}
              />
              {erros.mensagem && (
                <small id="erro-mensagem" style={{ color: '#fca5a5' }}>
                  {erros.mensagem}
                </small>
              )}
            </div>

            <button type="submit" className="botao botao-primario">
              <Icone nome="email" tamanho={18} />
              Enviar mensagem
            </button>

            <small style={{ color: 'var(--texto-fraco)' }}>
              Projeto de portfólio: o envio é simulado e nenhum dado é armazenado.
            </small>
          </form>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} id="duvidas">
        <div className="container">
          <SecaoCabecalho
            selo="Central de ajuda"
            titulo="Perguntas frequentes"
            descricao="Clique em uma pergunta para ver a resposta."
          />
          <div className="revelar">
            <Acordeao itens={PERGUNTAS} />
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }} id="pagamento">
        <div className="container">
          <div className="grade-marcas">
            {[
              { titulo: 'Garantia e trocas', icone: 'escudo' },
              { titulo: 'Formas de pagamento', icone: 'cartao' },
              { titulo: 'Prazos de entrega', icone: 'caminhao' },
            ].map((item) => (
              <a
                key={item.titulo}
                href="#/contato#duvidas"
                className="marca-cartao revelar"
                style={{ '--cor-marca': '#7c3aed', '--cor-marca2': '#22d3ee' }}
              >
                <span className="marca-icone">
                  <Icone nome={item.icone} tamanho={26} />
                </span>
                <span className="marca-info">
                  <h3>{item.titulo}</h3>
                  <span className="seta">
                    Ver respostas <Icone nome="seta" tamanho={15} />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}