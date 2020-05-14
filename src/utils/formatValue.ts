const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    currencyDisplay: 'symbol',
    style: 'currency',
    useGrouping: true,
  }).format(value);

export default formatValue;
