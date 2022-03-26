const products =[
    {name:'laptop', price: 3200, brand:'lenovo', color:'silver'},
    {name:'phone', price: 7000, brand:'iphone', color:'golden'},
    {name:'watch', price: 3000, brand:'casio', color:'yellow'},
    {name:'sunglass', price: 300, brand:'remond', color:'black'},
    {name:'camera', price: 9000, brand:'canon', color:'gray'},
];
const brands = products.map(product =>product.brand);
const brandName = products.map(product => product.name)
const color = products.map(product => product.color)
// console.log(brands)
// console.log(brandName)
// console.log(color);

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));


// multiline 
products.forEach(product =>{

})

//3. filter

const cheap =products.filter(product => product.price<= 5000);
console.log(cheap);

const specificName = products.filter(p =>p.name.includes('n'));
console.log(specificName)

//find
const special = products.find(p =>p.name.includes('n'));
console.log(special)
