// Javascript Fundamentals - Part 1
//Coding Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMI_Mark = massMark / heightMark ** 2;
console.log(BMI_Mark);

let BMI_John = massJohn / heightJohn ** 2;
console.log(BMI_John);

let markHigherBMI = true;
if (BMI_Mark > BMI_John) {
  console.log(markHigherBMI);
} else {
  console.log(!markHigherBMI);
}

//Coding Challenge #2
if (BMI_Mark > BMI_John) {
  console.log(
    `Mark's BMI (${BMI_Mark}) is higher than John's BMI (${BMI_John}) `
  );
} else {
  console.log(
    `John's BMI (${BMI_John}) is higher than Mark's BMI (${BMI_Mark})}`
  );
}

//Coding Challenge #3
let dolphins;
let koalas;

let avgScoreDolphins = (97 + 112 + 101) / 3;
console.log(avgScoreDolphins);
let avgScoreKoalas = (109 + 95 + 106) / 3;
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Dolphins win the trophy!");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
  console.log("Koalas win the trophuy!");
} else if (
  avgScoreDolphins === avgScoreKoalas &&
  avgScoreDolphins >= 100 &&
  avgScoreKoalas >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("Neither team wins the trophy!");
}

//Coding Challenge #4
//if (bill = 50 - 300) => tip = 15%, else if (bill > 300) => tip = 20%
let tip;
let bill;

// bill = Number(prompt("How much is the bill?:"));
console.log(`Your bill is: $${bill}`);

/*if (bill >= 50 && bill <= 300) {
  tip = (15 / 100) * bill;
  console.log(`Tip = ${tip}`);
} else if (bill > 300) {
  tip = (20 / 100) * bill;
  console.log(`Tip = ${tip}`);
}*/

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`You should tip: $${tip}`);

let finalValue = bill + tip;

console.log(
  `Your bill was ${bill}, your tip was ${tip} and the total value was ${finalValue}`
);
