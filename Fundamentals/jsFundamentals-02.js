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

//Function Declaration
//You can call a Function Declaration before defining it
function calcAge1(birthYear) {
  const age = 2025 - birthYear;
  return age;
}
const age1 = calcAge1(2002);
console.log(`My age is ${age1} `);

//Function Expression
//You can't call a Function Declaration before initializing it
const calcAge2 = function (birthYear) {
  const age = 2025 - birthYear;
  return age;
};
const age2 = calcAge2(1999);
console.log(`My age is ${age2}`);

//Practice
//Function Declaration
function recipe(ingredient1, ingredient2, ingredient3) {
  const ingredients = `${ingredient1} , ${ingredient2} & ${ingredient3}`;
  return ingredients;
}
const frenchToastRecipe = recipe("Eggs", "Milk", "Bread");
console.log(`The ingredients for French Toast are ${frenchToastRecipe}.`);

//Function Expression (same example)
const Recipe = function (ingredient1, ingredient2, ingredient3) {
  const ingredients = `${ingredient1}, ${ingredient2} & ${ingredient3}`;
  return ingredients;
};
const ramenRecipe = Recipe("Noodles", "Water", "Seasoning");
console.log(`The ingredients for Ramen are ${ramenRecipe}.`);

//Arrow Function (Added is ES6)
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

//Calling a function within a function
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
