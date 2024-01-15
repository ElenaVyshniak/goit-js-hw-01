// Задача 2. Доставка товару
// Оголошена функція getShippingMessage(country, price, deliveryFee)
// Виклик getShippingMessage("Australia", 120, 50) повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingMessage("Germany", 80, 20) повертає "Shipping to Germany will cost 100 credits"
// Виклик getShippingMessage("Sweden", 100, 20) повертає "Shipping to Sweden will cost 120 credits"
// Виклик getShippingMessage з будь якими-валідними аргументами повертає правильне значення

function getShippingMessag(country, price, deliveryFee) {
  const totalCost = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalCost} credits`;
}

console.log(getShippingMessage('Australia', 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage('Germany', 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage('Sweden', 100, 20)); // "Shipping to Sweden will cost 120 credits"
