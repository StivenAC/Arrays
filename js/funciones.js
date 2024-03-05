const sumArray = (arr) => arr.reduce((total, current) => total + current, 0);
const maxArray = (arr) => Math.max(...arr);
const minArray = (arr) => Math.min(...arr);
const averageArray = (arr) => {
  const sum = arr.reduce((total, current) => total + current, 0);
  return sum / arr.length;
};
const doubleArray = (arr) => arr.map(element => element * 2);
const sortArray = (arr) => arr.sort((a, b) => a - b);
const sumOfSquares = (arr) => arr.reduce((total, current) => total + current ** 2, 0);
const multiplyByNumber = (arr, multiplier) => arr.map(element => element * multiplier);
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const arrays = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25],
  [6, 12, 18, 24, 30],
  [7, 14, 21, 28, 35],
  [8, 16, 24, 32, 40],
  [9, 18, 27, 36, 45],
  [10, 20, 30, 40, 50]
];

arrays.forEach((arr, index) => {
  console.log(`Arreglo ${index + 1}:`, arr);
  console.log(`Suma de elementos: ${sumArray(arr)}`);
  console.log(`Máximo elemento: ${maxArray(arr)}`);
  console.log(`Mínimo elemento: ${minArray(arr)}`);
  console.log(`Promedio de elementos: ${averageArray(arr)}`);
  console.log(`Duplicar elementos:`, doubleArray(arr));
  console.log(`Ordenar elementos:`, sortArray(arr));
  console.log(`Suma de cuadrados: ${sumOfSquares(arr)}`);
  console.log(`Multiplicar por 3:`, multiplyByNumber(arr, 3));
  console.log(`Factorial del primer elemento: ${factorial(arr[0])}`);
  console.log('-------------------');
});
