// Задача 3. Ширина елемента
// Оголошена функція getElementWidth(content, padding, border)
// Виклик getElementWidth("50px", "8px", "4px") повертає число 74
// Виклик getElementWidth("60px", "12px", "8.5px") повертає число 101
// Виклик getElementWidth("200px", "0px", "0px") повертає число 200
// Виклик getElementWidth з будь якими-валідними аргументами повертає правильне значення

function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const elementWidth = contentWidth + paddingWidth + borderWidth;

  return elementWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
