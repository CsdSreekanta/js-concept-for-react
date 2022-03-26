const student={
    name: 'sakib',
    age :34,
    movies: ['mayer doya', 'sokinar jamai']
};
const numbers=[34, 56, 78, 53]
const about =`My name is ${student.name}.He is ${student.age} years old. He has a number which is ${numbers[1]}. He also likes a movie ${student.movies[0]}  `
console.log(about);

const getFiftyFive =() => 55;

//single parameter
const addSixtyFive = num =>num + 65;

const isEven = x => x%2==0;

// multiple perameter
// const addThree = (x, y, x) => x+ y+z;

//multiline arrowfunction

const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;

}
// spread operatoor
const newNumbers = numbers;
numbers.push(98);

// console.log(newNumbers)

//it is spread Operator
const newNumbers2 =[...numbers];
const currentNumbers=[...numbers, 55];

// console.log(numbers)
numbers.push(100);
numbers.push(100);
numbers.push(100);
// console.log(newNumbers2);
// console.log(numbers)

// create a new array from an older array and add an element


console.log(newNumbers2);
console.log(numbers)
console.log(currentNumbers)