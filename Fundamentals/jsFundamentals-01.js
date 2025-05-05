//Hiding a button on click
const button = document.getElementById("button");
button.addEventListener("click", function () {
  button.classList.add("hidden");
});

//Declaring Variables and logging it to the console
let country = "Nepal";
let language = "Nepali";
let continent = "Asia";
let population = 10;

console.log(population / 2);

// population++; //Increasing the population by 1

console.log(population);
console.log(population > 6);

let avgPopulation = 33;
console.log(population < avgPopulation);

let description =
  country +
  " is in " +
  continent +
  ", " +
  "and it's " +
  population +
  " million people speak " +
  language +
  ".";

console.log(description);

//Using String Literals
description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

//If/Else Statements
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}

//Type Conversion and Coercion
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 50); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//== VS ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 Border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No Borders!");
// }

/*
//Logical Operators
let isIsland = false;
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}. :)`);
} else {
  console.log(`${country} doesn't meet your criteria. :(`);
}
*/

//typeOf Operator
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);

//Arithematic Operators
console.log(2 ** 3); // 2 ** 3 -> 2 to the power 3

//Assignment Operators
let x = 10;
x += x;
console.log(x); // -> 20
x -= x;
console.log(x); // -> 0
x = 20;
x *= x;
console.log(x); // -> 20 * 20 = 400
x++;
console.log(x); // -> x = x + 1 = 401
x--;
console.log(x); // -> x = x -1 = 400

//Comparison Operators
const birthYearSachit = 1990;
const birthYearSaksham = 2002;
let ageSachit = 2025 - birthYearSachit;
let ageSaksham = 2025 - birthYearSaksham;
console.log(ageSachit > ageSaksham);

//Switch Statement
let day;
// day = String(prompt("What day is it today?: "));

switch (day) {
  case "Sunday":
    console.log("Make a plan for the following week.");
    break;

  case "Monday":
    console.log("Practice Javascript!");
    break;

  case "Tuesday":
    console.log("Build a simple Project!");
    break;

  case "Wednesday":
    console.log("Go for a coffee date!");
    break;

  case "Thursday":
    console.log("Exercise for and hour or two!");
    break;

  case "Friday":
    console.log("Look back at what you learned this week");
    break;

  case "Saturday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid day!");
}

//Ternary Operator
let age;
// age = Number(prompt("Enter your age: "));
age >= 18 ? console.log("You can drive!") : console.log("You can't drive!");

//Using Ternary Operator to set a variable
const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

//Using Ternary Operator in a Template Literal
console.log(`I like to drink ${age >= 18 ? "Wine 🍷" : "Water 💧"}`);
