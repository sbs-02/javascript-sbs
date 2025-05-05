"use strict";
function logger() {
  console.log("Hello World");
}

//calling / running / invoking function
logger();

console.log(typeof logger); // function

//Writing a function named fruitProcessor with parameters(apples and oranges) with arguments(5, 0) and (2, 4)
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
