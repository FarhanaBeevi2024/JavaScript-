// 3) Sample data with nested arrays 
// const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];


//  1) Find the sum of all numbers in the nested arrays.

// 2) Find the maximum number in the entire nested array.

// 3) Find the average of all numbers in the nested arrays.

//  4) Find square of each number in the nested arrays.

//  5) Find all even numbers from the nested arrays.

// 6) Use reduceRight to concatenate all nested arrays in reverse order.

// 7) create a flattened array from the nested arrays.

// 8) check if the number 5 is present in any of the nested arrays

// 9) create a single string of all numbers separated by a comma. 

//  10) Print each number in the nested arrays.

// 11) Sort the nested arrays based on the sum of their numbers.

// 12) Use map to get the product of the first and last number in each nested array.

// 13) Use filter to get all arrays where the sum of numbers is greater than 15.

// 14) Use reduce to find the product of all numbers in the nested arrays.

//  15) create an array of square roots of all numbers in the nested arrays.

// 16) Use includes to check if the number 20 is present in any of the nested arrays.

// 17) Use map to convert each number in the nested arrays to its string representation.

// 18) Use filter to get all arrays where the length is greater than 2

// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.

//  20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.

// 21) Sort the nested arrays based on the length of each array.

// 22) Use map to convert each number in the nested arrays to its negative.

// 23) Use filter to get all arrays where the last number is greater than 10.

//  24) Use reduceRight to get the difference between consecutive numbers in each nested array.

// 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.

//  26) Use includes to check if the number 15 is present in any of the nested arrays.

// 27) Use map to convert each number in the nested arrays to its absolute value.

// 28) Use filter to get all arrays where the first number is less than 5.

// 29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.

// 30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.


const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];


//  1) Find the sum of all numbers in the nested arrays.


console.log('1) Find the sum of all numbers in the nested arrays');
sum = data.flat().reduce((a,b) => a + b)
console.log(sum);
console.log('----------------------------------------------------------');

// 2) Find the maximum number in the entire nested array.
console.log('2) Find the maximum number in the entire nested array');
maxNum = data.flat().reduce((num1,num2) => num1[2]>num2[2]? num1:num2)
console.log(maxNum);
console.log('----------------------------------------------------------');


// 3) Find the average of all numbers in the nested arrays.
console.log('3) Find theaverage of all numbers in the nested arrays');
average = data.flat().reduce((num1,num2) => (num1+num2)%data.flat().length)
console.log(average);

console.log('----------------------------------------------------------');

//  4) Find square of each number in the nested arrays.
console.log(' 4) Find square of each number in the nested arrays');

data.flat().forEach(num =>
    {
        console.log(num**2);

    });
    console.log('----------------------------------------------------------');

//  5) Find all even numbers from the nested arrays.

console.log('5) Find all even numbers from the nested arrays');
even = data.flat().filter(num=>num%2==0)
console.log(even);
console.log('----------------------------------------------------------');

// 6) Use reduceRight to concatenate all nested arrays in reverse order.
console.log('6) Use reduceRight to concatenate all nested arrays in reverse order.');
console.log(data.reduceRight((current,initial)=> [...current,initial],[]));
console.log('----------------------------------------------------------');


// 7) create a flattened array from the nested arrays.
console.log('7) create a flattened array from the nested arrays.');
console.log(data.flat());

console.log('----------------------------------------------------------');


// 8) check if the number 5 is present in any of the nested arrays
console.log(' 8) check if the number 5 is present in any of the nested arrays');
check = data.flat().some(num=>num==5)
console.log(check?'yes': 'no');
console.log('----------------------------------------------------------');

// 9) create a single string of all numbers separated by a comma.
console.log('9) create a single string of all numbers separated by a comma.');
singleString = data.map(arr => arr.join(', ')).join(', ');
console.log(singleString);
console.log('----------------------------------------------------------');


//  10) Print each number in the nested arrays.
console.log('10) Print each number in the nested arrays.');
data.flat().forEach(x=> console.log(x));
console.log('----------------------------------------------------------');

// 11) Sort the nested arrays based on the sum of their numbers.
console.log('11) Sort the nested arrays based on the sum of their numbers.');
dataArray = [...data];

sortedArray= dataArray.sort(item=> item.reduce((num1,num2) => (num1-num2)))
console.log("descending",sortedArray);
sortedArray= dataArray.sort(item=> item.reduce((num1,num2) => (num2-num1)))
console.log("ascending", sortedArray);

console.log('------------------------------------')
// 12) Use map to get the product of the first and last number in each nested array.
console.log('12) Use map to get the product of the first and last number in each nested array.');
const product = data.map(([a,,b]) => a*b)
console.log(data);
console.log(product);
console.log('----------------------------------------------------------');

// 13) Use filter to get all arrays where the sum of numbers is greater than 15.
console.log('13) Use filter to get all arrays where the sum of numbers is greater than 15.');
filteredArray = data.filter(x=> x.reduce((a,b) => (a + b))>15);
console.log(filteredArray);
console.log('----------------------------------------------------------');

// 14) Use reduce to find the product of all numbers in the nested arrays.
console.log('14) Use reduce to find the product of all numbers in the nested arrays.');
productArray = data.map(x=> x.reduce((a,b) => (a * b)));
console.log(productArray);
console.log('----------------------------------------------------------');

//  15) create an array of square roots of all numbers in the nested arrays.
console.log('15) create an array of square roots of all numbers in the nested arrays');
squareRoot = data.map(item=> item.map(num => Math.sqrt(num)));
console.log(squareRoot);
console.log('----------------------------------------------------------');

// 16) Use includes to check if the number 20 is present in any of the nested arrays.

console.log('16) Use includes to check if the number 20 is present in any of the nested arrays.');
Twenty = data.some(item => item.includes(20));
console.log(Twenty);
console.log('----------------------------------------------------------');

// 17) Use map to convert each number in the nested arrays to its string representation.
console.log('17) Use map to convert each number in the nested arrays to its string representation.');
tostring = data.map(item => item.map(num => num.toString()));
console.log(tostring);
console.log('----------------------------------------------------------');


// 18) Use filter to get all arrays where the length is greater than 2
console.log('18) Use filter to get all arrays where the length is greater than 2');
filter = data.filter(item => item.length > 2);
console.log(filter);
console.log('----------------------------------------------------------');


// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.



//  20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.

// 21) Sort the nested arrays based on the length of each array.

// 22) Use map to convert each number in the nested arrays to its negative.

// 23) Use filter to get all arrays where the last number is greater than 10.

//  24) Use reduceRight to get the difference between consecutive numbers in each nested array.

// 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.

//  26) Use includes to check if the number 15 is present in any of the nested arrays.

// 27) Use map to convert each number in the nested arrays to its absolute value.

// 28) Use filter to get all arrays where the first number is less than 5.

// 29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.

// 30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.