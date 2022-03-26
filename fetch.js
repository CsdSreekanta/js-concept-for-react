//JSON
const student = {
    name: 'sakib',
    age: 32,
    movies:['king khan', 'dhakar mastan']
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)


//fetch
// fetch('url')
// .then(res =>res.json())
// .then(data => console.log(data));


// keys ,values
const keys =Object.keys(student);
const values =Object.values(student);
// console.log(keys)
// console.log(values)

//for
const numbers =[23, 40, 56, 78, 67];
numbers.forEach(number => console.log(number));
numbers.map(number => console.log(number*2));


// for of on array like object

// loop on an object using for in

//add or remove from an arry
const products =[
    {name:'laptop', price: 3200, brand:'lenovo', color:'silver'},
    {name:'phone', price: 7000, brand:'iphone', color:'golden'},
    {name:'watch', price: 3000, brand:'casio', color:'yellow'},
    {name:'sunglass', price: 300, brand:'remond', color:'black'},
    {name:'camera', price: 9000, brand:'canon', color:'gray'},
];
const newProduct ={name:'web came', price: 700, brand:'lal'};

//copy products array and then new product
const newProducts =[...products, newProduct];
// console.log(newProducts)


//create a new array without one specific item
//remove phone means create a new array without the phone


const remaining =products.filter(product =>product.name!=='phone');
console.log(remaining)
