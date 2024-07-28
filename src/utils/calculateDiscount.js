export function calculateDiscount(originalPrice, discount) {
  let price;
  price = originalPrice - (originalPrice * discount) / 100;
  return price.toFixed(2);
}
