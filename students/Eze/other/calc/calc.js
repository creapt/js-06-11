/**
 * Простой калькулятор 
 * 
 */

const operations = require('./operations.js');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Калькулятор.
Вам будет предложено ввести 2 числа и выбрать действие

`);

rl.question('Введите первый аргумент: ', (x) => {
  rl.question('Введите второй агрумент: ', (y) => {
    rl.question(`
 действия:
[1] сложение (+)
[2] вычитание (-)
[3] умножение (*)
[4] деление (/)
введите номер нужного оператора: `, (choice) => {
      if (!operations.validateNumbers(x, y)) {
        console.log('Допустимы только числа! Перезапустите программу.');
      } else {
        switch (choice) {
          case '1':
            console.log(`Сумма ${x} и ${y} равна ${operations.add(x, y)}.`);
            break;
          case '2':
            console.log(`Разница чисел ${x} и ${y} равна ${operations.sub(x, y)}.`);
            break;
          case '3':
            console.log(`Произведение чисел ${x} и ${y} равно ${operations.mult(x, y)}.`);
            break;
          case '4':
            console.log(`Деление чисел ${x} и ${y} равно ${operations.divide(x, y)}.`);
            break;
         default:
           console.log('вы должны выбрать один из  4х вариантов.');
           break;
        }
      }
      rl.close();
    });
  });
});