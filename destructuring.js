// array distructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [ 42, 65];
const [x, y] = numbers;
// console.log(x, y)

function boxify (num1, num2){
    const nums = [ num1, num2];
    return nums;
}

// const[first, second] = [90, 34]
const[first, second] = boxify(90, 34)
// console.log(boxify(90, 34));

console.log(first, second)
console.log(second, first)


const student = {
    name: 'sakib',
    age: 32,
    movies:['king khan', 'dhakar mastan']
};

const [firstMovie, secondMovie] = student.movies;

console.log(firstMovie, secondMovie)



//object destructuring
const {name, age} = { name: 'alu', age: 13};

const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification:{
        height: 66,
        weight:67,
        address: 'kumarkhali',
        drink:'water',
        watch: {
            color:'black',
            price:500,
            brand:'gramit'
        }
    }
}

const {machine, id} = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification.watch;

