//find()

fruits = ['apple','pineapple','mango','orange','kiwi']

//find mango from the given array

mango = fruits.find(f=>f=='mango')
console.log(mango);

//includes()

//is mango present in the array

b = fruits.includes('mango')
console.log(b?'yes': 'no');


//indexOf()

//find the index of mango
i = fruits.indexOf('mango')
console.log(i);