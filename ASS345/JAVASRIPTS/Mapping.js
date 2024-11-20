const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);
// const cubes = numbers.map(cube);

console.log(squares);

function square(element) {
  return Math.pow(element, 2);
}

// function cubes(element) {
//   return Math.pow(element, 3);
// }
