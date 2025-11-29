// function saludo(nombre) {
//   console.log(`Hola mi nombre es: ${nombre}`);
// }

// // const accion = function nombre() {
  
// // }

// const accion = (palabra) => {
  
// }
// accion("Palabra", function () {
//   console.log(`Hola mi nombre es: ${nombre}`);
// })

// // saludo("Andrés Santiago")


// function accion(...a) {
//   const [b, c] = a
//   console.log(b,c);
  
// }

// function almacenar(callback) {
//   const nombre = "Ana"
//   const apellido = "Torres"
//   callback(nombre, apellido);
// }

// almacenar(accion);

// function saludar(...nombre) {
//   console.log(`Hola, ${nombre}`);
// }

// setTimeout(saludar, 2000);

// const frutas = ['Manzana', 'Pera', 'Banano', 'Anis']

// frutas.forEach((a, b, c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// })

// frutas.map((v, i) => {
  
//   if (i == 1) {
//     console.log(v);
//     console.log(i);
//     a[i] = "Aguacate"
//     console.log(a[i]);
//   }
// })

// const nuevo = frutas.map(value)

// let numbers = [1, 5, 10, 15]
// let doubles = numbers.map((value) => {
//   return value * 2;
// })

// console.log(doubles);

// const array1 = [5, 12, 8, 130, 44]

// const isLargeNumber = (element) => {
//   return element > 13;
// }

// let respuesta = array1.findIndex(isLargeNumber)
// console.log(respuesta);

// const words = ["Spray", "Arroz", "Aguacate", "Exuberant", "Cinco"]

// const result = words.filter((word) => {
//   return word.length > 6;
// })

// console.log(result);
// console.log(words);


// const array1 = [5, 12, 8, 130, 44]

// const found = array1.find((element) => {
//   return element > 10;
// })

// console.log(found);

// const array1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(array1.length);


// let res = array1.fill (33,2,4)

// console.log(res);

// const array = [1, 2, 3, 4, 5];

// const even = ((element) => {
//   return element % 2 === 0;
// });

// let res = array.some(even);

// const array = [1, 2, 3, 4, 5];

// const even = ((element) => {
//   return element % 2 === 0;
// });

// let res = array.every(even);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());

// const arr1 = [0, 1, 2, [3, 4], 5, 6, [7, 8, [9, 10, 11, [12, 13, 14]]]];

// console.log(arr1.flat(3));

// const arr1 = [1, 2, 1];

// const result = arr1.flatMap((num) => {
//   return num === 2 ? [2, 2] : 1;
// });

// console.log(result);

