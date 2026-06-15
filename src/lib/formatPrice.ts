export function formatPrice(priceFrom: number, priceTo?: number) {
  const format = (value: number) => `${value.toLocaleString("ru-RU")} ₽`;
  return priceTo ? `от ${format(priceFrom)} до ${format(priceTo)}` : `от ${format(priceFrom)}`;
}
