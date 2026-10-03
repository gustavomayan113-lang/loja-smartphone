/**
 * Catalogo da Caell Store - loja ficticia de smartphones (projeto de portfolio).
 * Fotos reais: /img/fotos (baixadas do Wikimedia Commons, licenca CC BY-SA).
 * Ilustracoes geradas por script: /img/phones
 */

const render = (slug, nome) => `/img/phones/${slug}-${nome}.svg`
const foto = (arquivo) => `/img/fotos/${arquivo}`

export const CREDITO_FOTOS = 'Foto: Wikimedia Commons · CC BY-SA 4.0'

export const MARCAS = [
  {
    id: 'apple',
    nome: 'iPhone',
    marca: 'Apple',
    cor: '#cbd5e1',
    cor2: '#64748b',
    quantidade: 4,
  },
  {
    id: 'samsung',
    nome: 'Galaxy',
    marca: 'Samsung',
    cor: '#38bdf8',
    cor2: '#1d4ed8',
    quantidade: 3,
  },
  {
    id: 'motorola',
    nome: 'Motorola',
    marca: 'Motorola',
    cor: '#a78bfa',
    cor2: '#6d28d9',
    quantidade: 4,
  },
]

const BASE_CELULARES = [
  {
    slug: 'iphone-15-pro-max',
    nome: 'iPhone 15 Pro Max',
    marca: 'Apple',
    linha: 'iPhone',
    selo: 'Top de linha',
    preco: 11499,
    precoAnterior: 12999,
    parcelas: 12,
    nota: 4.9,
    avaliacoes: 412,
    estoque: 7,
    novoLancamento: true,
    maisVendido: true,
    resumo:
      'O maior e mais potente iPhone da loja: tela Super Retina XDR de 6,7", corpo de titânio e câmera tripla de 48 MP com zoom óptico de 5x.',
    destaques: [
      'Câmera tripla de 48 MP com teleobjetiva 5x',
      'Chip Apple A17 Pro fabrication em 3 nm',
      'Tela de 6,7" com 120 Hz adaptativo',
      'Botão de Ação para atalhos rápidos',
    ],
    cores: [
      { nome: 'Titânio Natural', hex: '#9aa3ad' },
      { nome: 'Titânio Azul', hex: '#5b7186' },
      { nome: 'Titânio Branco', hex: '#e6e4df' },
      { nome: 'Titânio Preto', hex: '#3b3f45' },
    ],
    imagens: [
      {
        src: foto('iphone-15-pro-max-frente.jpg'),
        alt: 'iPhone 15 Pro Max visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('iphone-15-pro-max-traseira.jpg'),
        alt: 'iPhone 15 Pro Max visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('iphone-15-pro-max', 'detalhe'),
        alt: 'Detalhe das câmeras do iPhone 15 Pro Max',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'Super Retina XDR OLED' },
          { rotulo: 'Tamanho', valor: '6,7 polegadas' },
          { rotulo: 'Resolução', valor: '2796 x 1290 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 120 Hz adaptativo' },
          { rotulo: 'Densidade', valor: '460 ppi' },
          { rotulo: 'Recursos', valor: 'Always-On, HDR, True Tone' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Apple A17 Pro' },
          { rotulo: 'Processamento', valor: '3 nanômetros' },
          { rotulo: 'Núcleo neural', valor: '16 núcleos' },
          { rotulo: 'Memória RAM', valor: '8 GB' },
          { rotulo: 'Armazenamento', valor: '256 GB' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '48 MP - 24 mm - f/1.78' },
          { rotulo: 'Ultra-angular', valor: '13 MP - 13 mm - f/2.2' },
          { rotulo: 'Teleobjetiva', valor: '12 MP - 120 mm - zoom 5x' },
          { rotulo: 'Frontal', valor: '12 MP - f/1.9 com Focus' },
          { rotulo: 'Vídeo', valor: '4K 60 fps ProRes / HDR Log' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '4.441 mAh' },
          { rotulo: 'Autonomia de vídeo', valor: 'Até 29 horas' },
          { rotulo: 'Carregamento', valor: 'USB-C até 27 W' },
          { rotulo: 'Carregamento sem fio', valor: 'Qi2 até 15 W' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'iOS 17' },
          { rotulo: 'Redes', valor: '5G, LTE, Wi-Fi 6E' },
          { rotulo: 'Bluetooth', valor: '5.3' },
          { rotulo: 'Resistência', valor: 'IP68 (6 m por 30 min)' },
          { rotulo: 'Peso', valor: '227 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'iphone-15-pro',
    nome: 'iPhone 15 Pro',
    marca: 'Apple',
    linha: 'iPhone',
    selo: 'Lançamento',
    preco: 9299,
    precoAnterior: 10499,
    parcelas: 12,
    nota: 4.8,
    avaliacoes: 356,
    estoque: 11,
    novoLancamento: true,
    resumo:
      'Compacto, leve e com a mesma potência do Pro Max: cabe no bolso e não abre mão da câmera de 48 MP nem da tela de 120 Hz.',
    destaques: [
      'Tela de 6,1" leve e compacta',
      'Câmera principal de 48 MP',
      'Chip A17 Pro com ray tracing',
      'Corpo em titânio grau aeroespacial',
    ],
    cores: [
      { nome: 'Titânio Azul', hex: '#5b7186' },
      { nome: 'Titânio Natural', hex: '#9aa3ad' },
      { nome: 'Titânio Preto', hex: '#3b3f45' },
      { nome: 'Titânio Branco', hex: '#e6e4df' },
    ],
    imagens: [
      {
        src: foto('iphone-15-pro-frente.jpg'),
        alt: 'iPhone 15 Pro visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('iphone-15-pro-traseira.jpg'),
        alt: 'iPhone 15 Pro visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('iphone-15-pro', 'detalhe'),
        alt: 'Detalhe das câmeras do iPhone 15 Pro',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'Super Retina XDR OLED' },
          { rotulo: 'Tamanho', valor: '6,1 polegadas' },
          { rotulo: 'Resolução', valor: '2556 x 1179 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 120 Hz adaptativo' },
          { rotulo: 'Densidade', valor: '460 ppi' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Apple A17 Pro' },
          { rotulo: 'Processamento', valor: '3 nanômetros' },
          { rotulo: 'Memória RAM', valor: '8 GB' },
          { rotulo: 'Armazenamento', valor: '128 GB' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '48 MP - 24 mm - f/1.78' },
          { rotulo: 'Ultra-angular', valor: '13 MP - 13 mm - f/2.2' },
          { rotulo: 'Teleobjetiva', valor: '12 MP - 77 mm - zoom 4x' },
          { rotulo: 'Frontal', valor: '12 MP - f/1.9' },
          { rotulo: 'Vídeo', valor: '4K 60 fps ProRes' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '3.278 mAh' },
          { rotulo: 'Autonomia de vídeo', valor: 'Até 23 horas' },
          { rotulo: 'Carregamento', valor: 'USB-C até 27 W' },
          { rotulo: 'Carregamento sem fio', valor: 'Qi2 até 15 W' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'iOS 17' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 6E' },
          { rotulo: 'Resistência', valor: 'IP68' },
          { rotulo: 'Peso', valor: '187 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'iphone-15',
    nome: 'iPhone 15',
    marca: 'Apple',
    linha: 'iPhone',
    selo: 'Popular',
    preco: 6499,
    precoAnterior: 7499,
    parcelas: 12,
    nota: 4.7,
    avaliacoes: 521,
    estoque: 18,
    maisVendido: true,
    resumo:
      'O melhor equilibrio entre preço e qualidade: câmera de 48 MP, USB-C e a Dynamic Island, no tamanho certo para o dia a dia.',
    destaques: [
      'Câmera dupla de 48 MP',
      'Dynamic Island interativa',
      'Chip A16 Bionic eficiente',
      'Tela de 6,1" com 60 Hz',
    ],
    cores: [
      { nome: 'Rosa', hex: '#f0a3ba' },
      { nome: 'Azul', hex: '#7fa3d8' },
      { nome: 'Verde', hex: '#a8c6a0' },
      { nome: 'Preto', hex: '#2f343b' },
    ],
    imagens: [
      {
        src: foto('iphone-15-frente.jpg'),
        alt: 'iPhone 15 visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('iphone-15-traseira.jpg'),
        alt: 'iPhone 15 visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('iphone-15', 'detalhe'),
        alt: 'Detalhe das câmeras do iPhone 15',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'Super Retina XDR OLED' },
          { rotulo: 'Tamanho', valor: '6,1 polegadas' },
          { rotulo: 'Resolução', valor: '2556 x 1179 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 60 Hz' },
          { rotulo: 'Recursos', valor: 'True Tone, HDR, Dynamic Island' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Apple A16 Bionic' },
          { rotulo: 'Processamento', valor: '4 nanômetros' },
          { rotulo: 'Memória RAM', valor: '6 GB' },
          { rotulo: 'Armazenamento', valor: '128 GB' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '48 MP - 26 mm - f/1.6' },
          { rotulo: 'Ultra-angular', valor: '12 MP - 13 mm - f/2.4' },
          { rotulo: 'Frontal', valor: '12 MP - f/1.9' },
          { rotulo: 'Vídeo', valor: '4K 60 fps HDR' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '3.349 mAh' },
          { rotulo: 'Autonomia de vídeo', valor: 'Até 20 horas' },
          { rotulo: 'Carregamento', valor: 'USB-C até 20 W' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'iOS 17' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 6' },
          { rotulo: 'Resistência', valor: 'IP68' },
          { rotulo: 'Peso', valor: '171 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'iphone-se-3',
    nome: 'iPhone SE 3',
    marca: 'Apple',
    linha: 'iPhone',
    selo: 'Entrada',
    preco: 3799,
    precoAnterior: 4299,
    parcelas: 10,
    nota: 4.5,
    avaliacoes: 189,
    estoque: 14,
    resumo:
      'O iPhone compacto com Touch ID e cabo USB-C. Pequeno no tamanho, gigante em autonomia: a opção mais acessível da loja.',
    destaques: [
      'Tela de 4,7" compacta',
      'Touch ID no botão de início',
      'Chip A15 Bionic rápido',
      'Excelente duração de bateria',
    ],
    cores: [
      { nome: 'Meia-noite', hex: '#2b333e' },
      { nome: 'Estelar', hex: '#e8e2d3' },
      { nome: 'Vermelho', hex: '#c8555a' },
    ],
    imagens: [
      {
        src: foto('iphone-se-3-frente.jpg'),
        alt: 'iPhone SE 3 visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('iphone-se-3-traseira.jpg'),
        alt: 'iPhone SE 3 visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('iphone-se-3', 'detalhe'),
        alt: 'Detalhe da câmera do iPhone SE 3',
        rotulo: 'Câmera',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'Retina HD IPS LCD' },
          { rotulo: 'Tamanho', valor: '4,7 polegadas' },
          { rotulo: 'Resolução', valor: '1334 x 750 px' },
          { rotulo: 'Biometria', valor: 'Touch ID no botão de início' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Apple A15 Bionic' },
          { rotulo: 'Memória RAM', valor: '4 GB' },
          { rotulo: 'Armazenamento', valor: '64 GB' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '12 MP - 28 mm - f/1.8' },
          { rotulo: 'Frontal', valor: '7 MP - f/2.2' },
          { rotulo: 'Vídeo', valor: '4K 60 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '2.018 mAh' },
          { rotulo: 'Autonomia', valor: 'Até 15 horas de vídeo' },
          { rotulo: 'Carregamento', valor: 'USB-C até 20 W' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'iOS 17' },
          { rotulo: 'Redes', valor: '4G LTE, Wi-Fi 6' },
          { rotulo: 'Resistência', valor: 'IP67' },
          { rotulo: 'Peso', valor: '144 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'galaxy-s24-ultra',
    nome: 'Galaxy S24 Ultra',
    marca: 'Samsung',
    linha: 'Galaxy',
    selo: 'Top de linha',
    preco: 10999,
    precoAnterior: 12499,
    parcelas: 12,
    nota: 4.9,
    avaliacoes: 468,
    estoque: 6,
    novoLancamento: true,
    maisVendido: true,
    resumo:
      'Tela gigante de 6,8" com caneta S Pen, câmera quádrupla de 200 MP e o Snapdragon 8 Gen 3 mais rápido do mercado.',
    destaques: [
      'Câmera principal de 200 MP',
      'Zoom óptico de 5x e Space Zoom 100x',
      'Tela QHD+ de 6,8" com 120 Hz',
      'S Pen inclusa na caixa',
    ],
    cores: [
      { nome: 'Titânio Preto', hex: '#3a3d42' },
      { nome: 'Titânio Cinza', hex: '#7c8189' },
      { nome: 'Titânio Violeta', hex: '#a99ecb' },
      { nome: 'Titânio Amarelo', hex: '#d9d3b8' },
    ],
    imagens: [
      {
        src: foto('galaxy-s24-ultra-frente.jpg'),
        alt: 'Galaxy S24 Ultra visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('galaxy-s24-ultra-traseira.jpg'),
        alt: 'Galaxy S24 Ultra visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('galaxy-s24-ultra', 'detalhe'),
        alt: 'Detalhe das câmeras do Galaxy S24 Ultra',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'Dynamic AMOLED 2X' },
          { rotulo: 'Tamanho', valor: '6,8 polegadas' },
          { rotulo: 'Resolução', valor: '3120 x 1440 px (QHD+)' },
          { rotulo: 'Taxa de atualização', valor: '1 Hz a 120 Hz adaptativo' },
          { rotulo: 'Brilho máximo', valor: '2.600 nits' },
          { rotulo: 'Proteção', valor: 'Vidro Armor antirreflexo' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Snapdragon 8 Gen 3 Mobile' },
          { rotulo: 'Memória RAM', valor: '12 GB' },
          { rotulo: 'Armazenamento', valor: '256 GB' },
          { rotulo: 'Expansão', valor: 'Slot microSD (até 1 TB)' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '200 MP - 23 mm - f/1.7' },
          { rotulo: 'Ultra-angular', valor: '12 MP - 13 mm - f/2.2' },
          { rotulo: 'Teleobjetiva 3x', valor: '10 MP - 69 mm - f/2.4' },
          { rotulo: 'Teleobjetiva 5x', valor: '50 MP - 111 mm - f/3.4' },
          { rotulo: 'Frontal', valor: '12 MP - f/2.2' },
          { rotulo: 'Vídeo', valor: '8K 30 fps / 4K 120 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '5.000 mAh' },
          { rotulo: 'Carregamento', valor: '45 W com fio' },
          { rotulo: 'Carregamento sem fio', valor: '15 W' },
          { rotulo: 'Autonomia de vídeo', valor: 'Até 30 horas' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'Android 14 com One UI 6.1' },
          { rotulo: 'Atualizações', valor: '7 anos de OS e segurança' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 7, eSIM' },
          { rotulo: 'Resistência', valor: 'IP68' },
          { rotulo: 'Peso', valor: '232 g' },
          { rotulo: 'Extras', valor: 'S Pen inclusa' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'galaxy-s24',
    nome: 'Galaxy S24',
    marca: 'Samsung',
    linha: 'Galaxy',
    selo: 'Lançamento',
    preco: 7499,
    precoAnterior: 8399,
    parcelas: 12,
    nota: 4.8,
    avaliacoes: 392,
    estoque: 9,
    novoLancamento: true,
    resumo:
      'O Galaxy pensado para o uso diário: tamanho confortável, câmera de 50 MP Stable e muita bateria em um corpo leve.',
    destaques: [
      'Tela de 6,2" com 120 Hz',
      'Câmera tripla de 50 MP com OIS',
      'Bateria de 4.000 mAh',
      'Atalhos com Galaxy AI',
    ],
    cores: [
      { nome: 'Grafite', hex: '#5b6069' },
      { nome: 'Creme', hex: '#d9d3c5' },
      { nome: 'Violeta', hex: '#a49ac9' },
      { nome: 'Preto', hex: '#2a2d33' },
    ],
    imagens: [
      {
        src: foto('galaxy-s24-frente.jpg'),
        alt: 'Galaxy S24 visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('galaxy-s24-traseira.jpg'),
        alt: 'Galaxy S24 visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('galaxy-s24', 'detalhe'),
        alt: 'Detalhe das câmeras do Galaxy S24',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'Dynamic AMOLED 2X' },
          { rotulo: 'Tamanho', valor: '6,2 polegadas' },
          { rotulo: 'Resolução', valor: '2340 x 1080 px (FHD+)' },
          { rotulo: 'Taxa de atualização', valor: '1 Hz a 120 Hz adaptativo' },
          { rotulo: 'Brilho máximo', valor: '2.600 nits' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Exynos 2400' },
          { rotulo: 'Memória RAM', valor: '8 GB' },
          { rotulo: 'Armazenamento', valor: '256 GB' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '50 MP - 24 mm - f/1.8 com OIS' },
          { rotulo: 'Ultra-angular', valor: '12 MP - 13 mm - f/2.2' },
          { rotulo: 'Teleobjetiva 3x', valor: '10 MP - 69 mm - f/2.4' },
          { rotulo: 'Frontal', valor: '12 MP - f/2.2' },
          { rotulo: 'Vídeo', valor: '8K 30 fps / 4K 60 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '4.000 mAh' },
          { rotulo: 'Carregamento', valor: '25 W com fio' },
          { rotulo: 'Carregamento sem fio', valor: '15 W' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'Android 14 com One UI 6.1' },
          { rotulo: 'Atualizações', valor: '7 anos de OS e segurança' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 7' },
          { rotulo: 'Resistência', valor: 'IP68' },
          { rotulo: 'Peso', valor: '167 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'galaxy-a55-5g',
    nome: 'Galaxy A55 5G',
    marca: 'Samsung',
    linha: 'Galaxy',
    selo: 'Custo-benefício',
    preco: 2399,
    precoAnterior: 2799,
    parcelas: 10,
    nota: 4.6,
    avaliacoes: 604,
    estoque: 24,
    maisVendido: true,
    resumo:
      'O queridinho da loja: tela AMOLED de 120 Hz, proteção IP67 e câmera de 64 MP por um preço que cabe no orçamento.',
    destaques: [
      'Tela Super AMOLED de 6,6" 120 Hz',
      'Câmera de 64 MP com OIS',
      'Bateria de 5.000 mAh',
      '4 anos de atualizações de sistema',
    ],
    cores: [
      { nome: 'Azul Marinho', hex: '#4f74a8' },
      { nome: 'Violeta', hex: '#a99fd0' },
      { nome: 'Preto', hex: '#33373d' },
      { nome: 'Amarelo-limão', hex: '#d9d16a' },
    ],
    imagens: [
      {
        src: foto('galaxy-a55-frente.jpg'),
        alt: 'Galaxy A55 5G visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('galaxy-a55-traseira.jpg'),
        alt: 'Galaxy A55 5G visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('galaxy-a55-5g', 'detalhe'),
        alt: 'Detalhe das câmeras do Galaxy A55 5G',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'Super AMOLED' },
          { rotulo: 'Tamanho', valor: '6,6 polegadas' },
          { rotulo: 'Resolução', valor: '2340 x 1080 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 120 Hz' },
          { rotulo: 'Brilho máximo', valor: '1.000 nits' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Exynos 1480' },
          { rotulo: 'Memória RAM', valor: '8 GB' },
          { rotulo: 'Armazenamento', valor: '128 GB' },
          { rotulo: 'Expansão', valor: 'Slot microSD (até 1 TB)' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '64 MP - 26 mm - f/1.8 com OIS' },
          { rotulo: 'Ultra-angular', valor: '12 MP - 13 mm - f/2.2' },
          { rotulo: 'Macro', valor: '5 MP - f/2.4' },
          { rotulo: 'Frontal', valor: '32 MP - f/2.2' },
          { rotulo: 'Vídeo', valor: '4K 30 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '5.000 mAh' },
          { rotulo: 'Carregamento', valor: '25 W com fio' },
          { rotulo: 'Carregamento sem fio', valor: '15 W' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'Android 14 com One UI 6.1' },
          { rotulo: 'Atualizações', valor: '4 anos de OS' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 6' },
          { rotulo: 'Resistência', valor: 'IP67' },
          { rotulo: 'Peso', valor: '213 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'motorola-edge-50-neo',
    nome: 'Motorola Edge 50 Neo',
    marca: 'Motorola',
    linha: 'Motorola',
    selo: 'Top de linha',
    preco: 4299,
    precoAnterior: 4999,
    parcelas: 12,
    nota: 4.7,
    avaliacoes: 264,
    estoque: 10,
    novoLancamento: true,
    resumo:
      'O melhor Motorola da loja: câmera de 50 MP com OIS, tela pOLED de 120 Hz e proteção IP68 contra chuva e poeira.',
    destaques: [
      'Câmera de 50 MP com estabilização OIS',
      'Tela pOLED de 6,4" com 120 Hz',
      'Bateria de 5.000 mAh com carregamento de 68 W',
      'Resistência IP68 e IP69',
    ],
    cores: [
      { nome: 'Azul Náutico', hex: '#5b93b8' },
      { nome: 'Preto Cabeça de Preto', hex: '#2c3037' },
      { nome: 'Verde Ártico', hex: '#8fc0b4' },
    ],
    imagens: [
      {
        src: foto('motorola-edge-50-neo-frente.jpg'),
        alt: 'Motorola Edge 50 Neo visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: foto('motorola-edge-50-neo-traseira.jpg'),
        alt: 'Motorola Edge 50 Neo visto de trás',
        rotulo: 'Traseira',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('motorola-edge-50-neo', 'detalhe'),
        alt: 'Detalhe das câmeras do Motorola Edge 50 Neo',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'pOLED' },
          { rotulo: 'Tamanho', valor: '6,4 polegadas' },
          { rotulo: 'Resolução', valor: '2400 x 1080 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 120 Hz' },
          { rotulo: 'Brilho máximo', valor: '1.300 nits' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'MediaTek Dimensity 7300' },
          { rotulo: 'Memória RAM', valor: '8 GB (com RAM Boost)' },
          { rotulo: 'Armazenamento', valor: '256 GB' },
          { rotulo: 'Expansão', valor: 'Slot microSD (até 1 TB)' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '50 MP - 25 mm - f/1.9 com OIS' },
          { rotulo: 'Ultra-angular', valor: '50 MP - 118 graus' },
          { rotulo: 'Macro', valor: '2 MP' },
          { rotulo: 'Frontal', valor: '32 MP - f/2.4' },
          { rotulo: 'Vídeo', valor: '4K 30 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '5.000 mAh' },
          { rotulo: 'Carregamento', valor: '68 W TurboPower' },
          { rotulo: 'Carregamento sem fio', valor: 'Não' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'Android 14 com Hello UI' },
          { rotulo: 'Atualizações', valor: '3 anos de OS' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 6, NFC' },
          { rotulo: 'Resistência', valor: 'IP68 e IP69' },
          { rotulo: 'Peso', valor: '190 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'moto-g54-5g',
    nome: 'Moto G54 5G',
    marca: 'Motorola',
    linha: 'Motorola',
    selo: 'Custo-benefício',
    preco: 1399,
    precoAnterior: 1699,
    parcelas: 10,
    nota: 4.5,
    avaliacoes: 358,
    estoque: 26,
    maisVendido: true,
    resumo:
      'Tela pOLED, 5G e câmera de 50 MP por menos de R$ 1.500: o melhor custo-benefício da loja.',
    destaques: [
      'Tela pOLED de 6,7" com 120 Hz',
      '5G, Wi-Fi 6 e NFC',
      'Câmera de 50 MP com OIS',
      'Bateria de 5.000 mAh com 33 W',
    ],
    cores: [
      { nome: 'Azul Oceano', hex: '#5b86a8' },
      { nome: 'Cinza Ônix', hex: '#5d646e' },
      { nome: 'Verde Menta', hex: '#8fc0a4' },
    ],
    imagens: [
      {
        src: foto('moto-g54-frente.jpg'),
        alt: 'Moto G54 5G visto de frente',
        rotulo: 'Frente',
        credito: CREDITO_FOTOS,
      },
      {
        src: render('moto-g54-5g', 'traseira'),
        alt: 'Ilustração da traseira do Moto G54 5G',
        rotulo: 'Traseira',
      },
      {
        src: render('moto-g54-5g', 'detalhe'),
        alt: 'Detalhe das câmeras do Moto G54 5G',
        rotulo: 'Câmeras',
      },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'pOLED' },
          { rotulo: 'Tamanho', valor: '6,7 polegadas' },
          { rotulo: 'Resolução', valor: '2400 x 1080 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 120 Hz' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'MediaTek Dimensity 7020' },
          { rotulo: 'Memória RAM', valor: '8 GB (16 GB com RAM Boost)' },
          { rotulo: 'Armazenamento', valor: '256 GB' },
          { rotulo: 'Expansão', valor: 'Slot microSD (até 1 TB)' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '50 MP - f/1.9 com OIS' },
          { rotulo: 'Ultra-angular', valor: '8 MP - 118 graus' },
          { rotulo: 'Frontal', valor: '16 MP - f/2.2' },
          { rotulo: 'Vídeo', valor: '1080p 60 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '5.000 mAh' },
          { rotulo: 'Carregamento', valor: '33 W TurboPower' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'Android 14 com Hello UI' },
          { rotulo: 'Atualizações', valor: '2 anos de OS' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 6' },
          { rotulo: 'Resistência', valor: 'IP54' },
          { rotulo: 'Peso', valor: '183 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'moto-g84-5g',
    nome: 'Moto G84 5G',
    marca: 'Motorola',
    linha: 'Motorola',
    selo: 'Custo-benefício',
    preco: 1899,
    precoAnterior: 2199,
    parcelas: 10,
    nota: 4.6,
    avaliacoes: 431,
    estoque: 21,
    resumo:
      'Design bonito, tela pOLED e Android limpo. Uma das melhores escolhas para quem quer um celular novo sem gastar muito.',
    destaques: [
      'Tela pOLED de 6,6" 120 Hz',
      '16 GB de RAM com RAM Boost',
      'Câmera de 50 MP com OIS',
      'Acabamento em couro vegano',
    ],
    cores: [
      { nome: 'Lavanda', hex: '#b9a9e4' },
      { nome: 'Azul Marinho', hex: '#3f4f78' },
      { nome: 'Verde', hex: '#79b58c' },
      { nome: 'Preto', hex: '#2c3037' },
    ],
    imagens: [
      { src: render('moto-g84-5g', 'frente'), alt: 'Moto G84 5G visto de frente', rotulo: 'Frente' },
      { src: render('moto-g84-5g', 'traseira'), alt: 'Moto G84 5G visto de trás', rotulo: 'Traseira' },
      { src: render('moto-g84-5g', 'detalhe'), alt: 'Detalhe das câmeras do Moto G84 5G', rotulo: 'Câmeras' },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'pOLED' },
          { rotulo: 'Tamanho', valor: '6,6 polegadas' },
          { rotulo: 'Resolução', valor: '2400 x 1080 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 120 Hz' },
          { rotulo: 'Brilho máximo', valor: '1.300 nits' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'Snapdragon 695' },
          { rotulo: 'Memória RAM', valor: '8 GB (16 GB com RAM Boost)' },
          { rotulo: 'Armazenamento', valor: '256 GB' },
          { rotulo: 'Expansão', valor: 'Slot microSD (até 1 TB)' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '50 MP - 27 mm - f/1.9 com OIS' },
          { rotulo: 'Ultra-angular', valor: '8 MP - 118°' },
          { rotulo: 'Macro', valor: '2 MP' },
          { rotulo: 'Frontal', valor: '16 MP - f/2.4' },
          { rotulo: 'Vídeo', valor: '1080p 60 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '5.000 mAh' },
          { rotulo: 'Carregamento', valor: '33 W TurboPower' },
          { rotulo: 'Carregamento sem fio', valor: 'Não' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'Android 14 com Hello UI' },
          { rotulo: 'Atualizações', valor: '2 anos de OS' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 6, NFC' },
          { rotulo: 'Resistência', valor: 'IP54' },
          { rotulo: 'Peso', valor: '167 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
  {
    slug: 'moto-g34-5g',
    nome: 'Moto G34 5G',
    marca: 'Motorola',
    linha: 'Motorola',
    selo: 'Entrada',
    preco: 1099,
    precoAnterior: 1399,
    parcelas: 8,
    nota: 4.4,
    avaliacoes: 512,
    estoque: 30,
    resumo:
      'O celular de entrada da loja com 5G de verdade, tela de 120 Hz e bateria que dura o dia todo sem preocupação.',
    destaques: [
      '5G e Wi-Fi 6',
      'Tela de 6,5" com 120 Hz',
      'Bateria de 5.000 mAh',
      'Acesso ao Android mais limpo',
    ],
    cores: [
      { nome: 'Cinza Ônix', hex: '#5d646e' },
      { nome: 'Azul Oceano', hex: '#5b86a8' },
      { nome: 'Verde Menta', hex: '#8fc0a4' },
    ],
    imagens: [
      { src: render('moto-g34-5g', 'frente'), alt: 'Moto G34 5G visto de frente', rotulo: 'Frente' },
      { src: render('moto-g34-5g', 'traseira'), alt: 'Moto G34 5G visto de trás', rotulo: 'Traseira' },
      { src: render('moto-g34-5g', 'detalhe'), alt: 'Detalhe das câmeras do Moto G34 5G', rotulo: 'Câmeras' },
    ],
    especificacoes: [
      {
        grupo: 'Tela',
        itens: [
          { rotulo: 'Tecnologia', valor: 'LCD IPS' },
          { rotulo: 'Tamanho', valor: '6,5 polegadas' },
          { rotulo: 'Resolução', valor: '2400 x 1080 px' },
          { rotulo: 'Taxa de atualização', valor: 'Até 120 Hz' },
        ],
      },
      {
        grupo: 'Desempenho',
        itens: [
          { rotulo: 'Chip', valor: 'MediaTek Dimensity 7020' },
          { rotulo: 'Memória RAM', valor: '8 GB (16 GB com RAM Boost)' },
          { rotulo: 'Armazenamento', valor: '128 GB' },
          { rotulo: 'Expansão', valor: 'Slot microSD (até 1 TB)' },
        ],
      },
      {
        grupo: 'Câmeras',
        itens: [
          { rotulo: 'Principal', valor: '50 MP - f/1.9 com OIS' },
          { rotulo: 'Ultra-angular', valor: '8 MP - 118°' },
          { rotulo: 'Frontal', valor: '16 MP - f/2.2' },
          { rotulo: 'Vídeo', valor: '1080p 30 fps' },
        ],
      },
      {
        grupo: 'Bateria e energia',
        itens: [
          { rotulo: 'Capacidade', valor: '5.000 mAh' },
          { rotulo: 'Carregamento', valor: '18 W' },
        ],
      },
      {
        grupo: 'Sistema e conectividade',
        itens: [
          { rotulo: 'Sistema', valor: 'Android 14' },
          { rotulo: 'Atualizações', valor: '2 anos de OS' },
          { rotulo: 'Redes', valor: '5G, Wi-Fi 6' },
          { rotulo: 'Resistência', valor: 'IP54' },
          { rotulo: 'Peso', valor: '192 g' },
          { rotulo: 'Garantia', valor: '12 meses de fábrica' },
        ],
      },
    ],
  },
]

/**
 * Cada imagem ganha uma "reserva": se a foto real falhar ao carregar,
 * a ilustração gerada pelo script entra no lugar e o card nunca fica vazio.
 */
export const CELULARES = BASE_CELULARES.map((celular) => ({
  ...celular,
  imagens: celular.imagens.map((imagem, indice) => ({
    ...imagem,
    reserva: render(celular.slug, ['frente', 'traseira', 'detalhe'][indice] || 'detalhe'),
  })),
}))

export const CREDITOS_FOTOS = [
  'Apple iPhone 15 Pro Max, 15 Pro, 15 e SE 3 — fotos de メイド理世, Toad40, Hajoon0102 e WikiGrower1',
  'Samsung Galaxy S24 Ultra, S24 e A55 5G — fotos de Dinkun Chen, メイド理世, Ganesh Mohan T e Captainmorlypogi1959',
  'Motorola Edge 50 Neo e Moto G54 5G — fotos de AdiDusi e Vitorperrut555',
]

export const BANNERS = [
  {
    titulo: 'Loja de demonstração',
    texto: 'Projeto de portfólio, sem compra real',
    icone: 'info',
  },
  {
    titulo: 'Parcelamos em até 12x',
    texto: 'Sem juros no cartão Caell',
    icone: 'cartao',
  },
  {
    titulo: 'Garantia de 12 meses',
    texto: 'Em todos os aparelhos da loja',
    icone: 'escudo',
  },
  {
    titulo: 'Troca facilitada',
    texto: '7 dias para devolver sem dor de cabeça',
    icone: 'troca',
  },
]

export const DEPOIMENTOS = [
  {
    nome: 'Marina Lopes',
    imagem: '/img/equipe/ana.svg',
    texto:
      'Comprei o Galaxy A55 achando que ia economizar e ganhei um celular que dura o dia todo com folga. A entrega chegou em dois dias.',
  },
  {
    nome: 'Diego Ferraz',
    imagem: '/img/equipe/bruno.svg',
    texto:
      'Tabela de especificações muito boa, comparei tudo antes de decidir. Peguei o Edge 50 Ultra e o carregamento de 125 W mudou minha vida.',
  },
  {
    nome: 'Juliana Prado',
    imagem: '/img/equipe/carla.svg',
    texto:
      'Atendimento que explica de verdade. Perguntei sobre as cores e me mandaram fotos reais de cada uma. Recomendo a loja.',
  },
]

export const EQUIPE = [
  {
    nome: 'Ana Ribeiro',
    cargo: 'Design e interface',
    imagem: '/img/equipe/ana.svg',
    texto: 'Cuida das telas, dos componentes e da tipografia do site.',
  },
  {
    nome: 'Bruno Tavares',
    cargo: 'Front-end',
    imagem: '/img/equipe/bruno.svg',
    texto: 'Construiu o catálogo, os filtros e a versão para celular.',
  },
  {
    nome: 'Carla Menezes',
    cargo: 'Conteúdo e catálogo',
    imagem: '/img/equipe/carla.svg',
    texto: 'Organiza as especificações e os textos de cada aparelho.',
  },
]

export const PERGUNTAS = [
  {
    pergunta: 'Os celulares são novos?',
    resposta:
      'Sim. Todos os aparelhos são 100% novos, lacrados na caixa, com nota fiscal e 12 meses de garantia de fábrica.',
  },
  {
    pergunta: 'Qual a diferença entre a loja e uma loja física?',
    resposta:
      'Esta é uma loja fictícia criada como projeto de portfólio: não existe cobrança real nem envio de produtos. Tudo aqui é demonstração de interface.',
  },
  {
    pergunta: 'Como funciona a entrega?',
    resposta:
      'Simulamos a entrega com cálculo de frete por CEP e prazo estimado. Na versão real, o mesmo componente mostraria as opções de transportadora.',
  },
  {
    pergunta: 'Posso trocar se não gostar?',
    resposta:
      'Sim. A primeira troca é gratuita em até 7 dias corridos, conforme o Código de Defesa do Consumidor.',
  },
  {
    pergunta: 'Quais formas de pagamento vocês aceitam?',
    resposta:
      'Pix, boleto, débito, crédito em até 12x sem juros e Apple Pay / Google Pay nas lojas parceiras.',
  },
]

export function buscarCelular(slug) {
  return CELULARES.find((celular) => celular.slug === slug)
}

export function celularesDaMarca(linha) {
  return CELULARES.filter((celular) => celular.linha === linha)
}

export function relacionados(celular) {
  return CELULARES.filter(
    (item) => item.slug !== celular.slug && item.linha === celular.linha
  )
    .concat(CELULARES.filter((item) => item.slug !== celular.slug && item.linha !== celular.linha))
    .slice(0, 4)
}

export function maisVendidos() {
  return CELULARES.filter((celular) => celular.maisVendido)
}

export function lancamentos() {
  return CELULARES.filter((celular) => celular.novoLancamento)
}