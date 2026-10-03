import { useState } from 'react'
import { Icone } from './Icone.jsx'
import { preco } from '../../src/lib/formato.js'

/**
 * Como a loja e ficticia, o botao de WhatsApp NAO abre conversa de verdade:
 * mostra uma previa da mensagem que seria enviada e explica que nada sai do site.
 */
export function ModalWhatsapp({ celular, aoFechar }) {
  const [copiado, setCopiado] = useState(false)

  const mensagem = `Olá! Vi o ${celular.nome} (${preco(celular.preco)}) no site da Caell Store e quero saber mais sobre esse celular.`

  async function copiar() {
    try {
      await navigator.clipboard.writeText(mensagem)
      setCopiado(true)
      window.setTimeout(() => setCopiado(false), 2500)
    } catch {
      setCopiado(false)
    }
  }

  return (
    <div className="whatsapp-fundo" role="dialog" aria-modal="true" aria-label="Falar no WhatsApp" onClick={aoFechar}>
      <div className="whatsapp-painel" onClick={(evento) => evento.stopPropagation()}>
        <div className="whatsapp-topo">
          <span className="whatsapp-avatar">
            <Icone nome="celular" tamanho={22} />
          </span>
          <span>
            <strong>Caell Store</strong>
            <span className="whatsapp-status">loja fictícia de portfólio</span>
          </span>
          <button type="button" className="icone-botao" onClick={aoFechar} aria-label="Fechar">
            <Icone nome="troca" tamanho={19} />
          </button>
        </div>

        <div className="whatsapp-balao">
          <p className="whatsapp-texto">{mensagem}</p>
          <span className="whatsapp-hora">agora · delivered</span>
        </div>

        <p className="whatsapp-aviso">
          <Icone nome="info" tamanho={18} />
          <span>
            Esta loja é de mentirinha: existe só para mostrar o portfólio, então a conversa
            <strong> não é enviada</strong> e o WhatsApp não abre.
          </span>
        </p>

        <div className="whatsapp-acoes">
          <button type="button" className="botao botao-whatsapp" onClick={copiar}>
            <Icone nome="whatsapp" tamanho={18} />
            {copiado ? 'Mensagem copiada!' : 'Copiar mensagem'}
          </button>
          <button type="button" className="botao botao-secundario" onClick={aoFechar}>
            Fechar
          </button>
        </div>

        <small className="whatsapp-nota">
          Em uma loja de verdade, este botão abriria o WhatsApp com a mensagem já escrita.
        </small>
      </div>
    </div>
  )
}