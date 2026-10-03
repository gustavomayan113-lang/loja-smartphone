export function Icone({ nome, tamanho = 20, className = '' }) {
  const tracos = {
    busca: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
    coracao: (
      <path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />
    ),
    seta: <path d="M5 12h13m0 0-5-5m5 5-5 5" />,
    setaDiagonal: <path d="M7 17 17 7m0 0H8m9 0v9" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    checar: <path d="m5 13 4 4L19 7" />,
    caminhao: (
      <>
        <path d="M2 7h11v10H2zM13 10h4.5l3.5 3.5V17h-8" />
        <circle cx="6.5" cy="18.5" r="1.8" />
        <circle cx="17" cy="18.5" r="1.8" />
      </>
    ),
    cartao: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2.6" />
        <path d="M2.5 10h19M6 15h3" />
      </>
    ),
    escudo: (
      <>
        <path d="M12 3 5 6v6c0 4.2 2.9 7.8 7 9 4.1-1.2 7-4.8 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    troca: (
      <>
        <path d="M4 8h13m0 0-3-3m3 3-3 3" />
        <path d="M20 16H7m0 0 3-3m-3 3 3 3" />
      </>
    ),
    raio: <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />,
    amplify: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M11 8v6M8 11h6M20 20l-3.5-3.5" />
      </>
    ),
    estrela: (
      <path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L4.2 9.7l5.4-.8L12 4Z" />
    ),
    estrelaCheia: (
      <path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L4.2 9.7l5.4-.8L12 4Z" fill="currentColor" />
    ),
    zap: (
      <>
        <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
      </>
    ),
   celular: (
      <>
        <rect x="6" y="2.5" width="12" height="19" rx="3" />
        <path d="M10.5 18.5h3" />
      </>
    ),
    institucional: (
      <>
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M9 21v-6h6v6M4 12h16" />
      </>
    ),
    telefone: (
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    ),
    email: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2.6" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    local: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    relogio: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
    github: (
      <path d="M9 20c-4 1.2-4-2.2-5.5-2.7M14.5 22v-3.4c0-1 .1-1.4-.6-2 3.4-.4 6.9-1.7 6.9-7.5A5.9 5.9 0 0 0 19.2 5c.1-.3.6-1.7-.1-3.4 0 0-1.3-.4-4 1.6a13.7 13.7 0 0 0-7.2 0c-2.7-2-4-1.6-4-1.6-.7 1.7-.2 3.1-.1 3.4A5.9 5.9 0 0 0 4.2 9c0 5.8 3.5 7.1 6.9 7.5-.6.5-.6 1.2-.6 2V22" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10.5V17M8 7.4v.1M12 17v-3.6a2 2 0 0 1 4 0V17" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <path d="M17 7v.1" />
      </>
    ),
    whatsapp: (
      <path d="M4 20 5 16a8 8 0 1 1 3 3l-4 1Zm4.5-4.5c0 3 2.5 5.5 5.5 5.5 1 0 2-.5 2-1.4 0-.6-1.3-1.3-2-1.3-.5 0-.9.6-1.3.6-1-.4-1.6-1-2-2 0-.4.6-.8.6-1.3 0-.7-.7-2-1.3-2-.9 0-1.4 1-1.4 2Z" />
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    info: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 11v5.5M12 7.8v.1" />
      </>
    ),
    comparar: (
      <>
        <path d="M4 6h7M4 12h7M4 18h7" />
        <path d="M15 6h5v12h-5" />
      </>
    ),
    camera: (
      <>
        <rect x="2.5" y="6.5" width="19" height="13" rx="3" />
        <circle cx="12" cy="13" r="3.6" />
        <path d="M8.5 6.5 10 4h4l1.5 2.5" />
      </>
    ),
  }

  return (
    <svg
      className={className}
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {tracos[nome] || null}
    </svg>
  )
}