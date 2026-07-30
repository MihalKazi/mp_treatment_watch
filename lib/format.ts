export function formatBDT(amount: number): string {
  if (amount >= 10000000) {
    return `৳${(amount / 10000000).toFixed(2)} কোটি`;
  }
  if (amount >= 100000) {
    return `৳${(amount / 100000).toFixed(2)} লাখ`;
  }
  return `৳${amount.toLocaleString("en-BD")}`;
}

export function formatUSD(amount: number): string {
  return `$${amount.toLocaleString("en-US")}`;
}

export function formatMultiplier(m: number): string {
  return `${m.toFixed(1)}×`;
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}
