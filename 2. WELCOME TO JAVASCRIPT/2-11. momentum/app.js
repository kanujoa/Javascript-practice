// 지난 과제로부터 시작

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);



// console.log(plusResult);

// calculator.times(2, 3);
// calculator.minus(2, 3);
// calculator.divide(2, 3);
// calculator.power(2, 3);

// console.log(calculator.plus(2, 3));


// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     ageOfForeigner + 2;
//     return "hello";
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);