var car ={
    name :'boleno',
    model : 'hatch back',
    manufacturer :'maruti',
    price :'10lakh'
}

//w.a.p to print model and manufacturer name of the given car

console.log(`model is ${car["model"]} and manufacturer is ${car["manufacturer"]}`);
console.log('--------------------------------------------------');

//w.a.p add varient key to the car object with value has 'manual'

car["varient"] = ['manuel']
console.log(car);
console.log('--------------------------------------------------');

//w.a.p to add a new value 'automatic' to the key varient.

car.varient.push('automatic')
console.log(car);
console.log('--------------------------------------------------');


//w.a.p to add a new key as 'colour' with value as red,blue and white.

car["colour"] = ['red','blue','white']
console.log(car);
console.log('--------------------------------------------------');
