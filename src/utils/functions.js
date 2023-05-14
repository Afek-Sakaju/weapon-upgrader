export function getTotalPrice(basicPrice, upgrades) {
  return upgrades.reduce((total, { price }) => {
    return total + price;
  }, basicPrice);
}
