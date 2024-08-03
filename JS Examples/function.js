const sum = (int1, int2) => summa(int1 + devide(int1, 2), int2 + devide(int2, 2));

function summa(int1, int2) {
    return int1 + int2;
}

const devide = (int1, int2) => int1 / int2; 

console.log(`Сумма Двух чисел равна = ${sum(10, 20)}`);

const sam = (int1, int2) => summa(int1 + multiply(int1, 2), int2 + multiply(int2, 2));

const multiply = (int1, int2) => int1 * int2;

console.log(`Сумма Двух чисел равна = ${sam(10, 20)}`);

const minus = (int1, int2) => sam(int1, int2) - sum(int1, int2)

const i1 = 15;
const i2 = 25;
console.log(`Вычисление числа ${sam(i1, i2)} и ${sum(i1, i2)} равно ${minus(i1, i2)}`);
