const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
})

export function preco(valor) {
  return brl.format(valor).replace(/\s/g, ' ')
}

export function parcelas(valor, vezes) {
  return `em até ${vezes}x de ${preco(valor / vezes)} sem juros`
}

export function desconto(de, para) {
  if (!de) return 0
  return Math.round((1 - para / de) * 100)
}