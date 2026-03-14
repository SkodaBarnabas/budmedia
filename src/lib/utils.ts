export function formatOreAsDkk(ore: number): string {
  const dkk = ore / 100;
  return new Intl.NumberFormat('da-DK', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(dkk);
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('da-DK').format(n);
}
