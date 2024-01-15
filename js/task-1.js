// Задача 1. Замовлення дроїдів
// Оголошена функція makeTransaction(quantity, pricePerDroid)
// Виклик makeTransaction(5, 3000) повертає "You ordered 5 droids worth 15000 credits!"
// Виклик makeTransaction(3, 1000) повертає "You ordered 3 droids worth 3000 credits!"
// Виклик makeTransaction(10, 500) повертає "You ordered 10 droids worth 5000 credits!"
// В консоль виведині всі результаті викликів
// Виклик makeTransaction з будь якими-валідними аргументами повертає правильне значення

// Оголошення функції makeTransaction
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
