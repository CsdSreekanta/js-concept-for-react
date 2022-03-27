//truthy: 'almal', true, 5, {}, []
// false: '', 0, flase, null, undefined
// check truthy
let myVar =5;
if(myVar){
 myVar = myVar*100;
}
else{
    myVar =0;
}

//false

let myMoney =50;
//you check negative or falsy anything
if(!myMoney){
    myMoney = myMoney *10;
}


const money = 80;
let food;

if(money > 100){
    food = 'biriyani'
}
else{
    food = 'cha biscuit'
}

//ternery 
let food1 = money > 70 ? 'biryani' : 'cha biscuit';
// console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke':'filter water';
// console.log(drink)

// 
const num1 = 52;
console.log(num1)
const numStr =  num1 + "";
console.log(numStr)


const input = ' 560';
const inputNum = +input;
// console.log(inputNum)


//
let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ?showUser(): hideUser();
// use && if the left side is true then right side wiil be executed
// isActive && showUser();
//use || if the left side is false then right side will be executed
isActive || hideUser();
// toggel boolean
isActive =!isActive;