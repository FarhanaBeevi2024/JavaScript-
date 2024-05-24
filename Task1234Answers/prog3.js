//3) Sample data with nested arrays 
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

 //1) Find the sum of all numbers in the nested arrays.
 sum=data.flat().reduce((n1,n2)=>n1+n2)
 console.log('sum of all numbers',sum);
console.log('---------------------------------');
//2) Find the maximum number in the entire nested array.
highestValue = data.flat().reduce((n1,n2)=>n1>n2?n1:n2)
console.log('highest Value is numbers',highestValue);
console.log('---------------------------------');
//3) Find the average of all numbers in the nested arrays.
console.log('Average of all given number is',sum/(data.flat()).length);
console.log('---------------------------------');

// 4) Find square of each number in the nested arrays.
sq=data.flat().map(num=>num**2)
console.log('square of each number in the nested arrays',sq);
console.log('---------------------------------');

// 5) Find all even numbers from the nested arrays.
even = data.flat().filter(num=>num%2==0)
console.log('all Even numbers in the given array are',even);
console.log('---------------------------------');

//6) Use reduceRight to concatenate all nested arrays in reverse order.
reverse=data.reduceRight((n1,n2)=>[...n1,n2],[])
console.log('nested arrays in reverse order',reverse);
console.log('---------------------------------');
//7) create a flattened array from the nested arrays.
flatened = data.flat()
console.log('flattened array',flatened);
console.log('---------------------------------');

//8) check if the number 5 is present in any of the nested arrays
console.log(data.flat().some(num=>num==5)?'5 is present in the given array':'5 is not present in the given array')
console.log('---------------------------------');

//9) create a single string of all numbers separated by a comma.
str='' 
data.flat().forEach(num=>str=str+num+',')
console.log('single string of all numbers separated by a comma:',str);
console.log('---------------------------------');

//  10) Print each number in the nested arrays.
console.log('Print each number in the nested arrays:');
data.flat().forEach(item=>console.log(item))
console.log('---------------------------------');

// 11) Sort the nested arrays based on the sum of their numbers.
arr=data.sort((a,b)=>a.reduce((n1,n2)=>n1+n2)-b.reduce((n1,n2)=>n1+n2))
console.log('Sort the nested arrays based on the sum of their numbers',arr);
console.log('---------------------------------');

// 12) Use map to get the product of the first and last number in each nested array.

pro=data.map(arr=>arr[0]*arr[arr.length-1])
console.log('Use map to get the product of the first and last number in each nested array:',pro);
console.log('---------------------------------');

// 13) Use filter to get all arrays where the sum of numbers is greater than 15
console.log('Use filter to get all arrays where the sum of numbers is greater than 15');
data.map(arr=>arr).filter(item=>item.reduce((n1,n2)=>n1+n2)>15).forEach(item=>console.log(item))
console.log('---------------------------------');

// 14) Use reduce to find the product of all numbers in the nested arrays.
p=data.flat().reduce((n1,n2)=>n1*n2)
console.log('Use reduce to find the product of all numbers in the nested arrays',p);
console.log('---------------------------------');

//  15) create an array of square roots of all numbers in the nested arrays.
sqrt=data.flat().map(num=>Number(Math.sqrt(num).toString().slice(0,3)))
console.log('create an array of square roots of all numbers in the nested arrays.',sqrt);
console.log('---------------------------------');

// 16) Use includes to check if the number 20 is present in any of the nested arrays.
console.log(data.flat().includes(20)?'number 20 is present':'number 20 not present')
console.log('---------------------------------');

// 17) Use map to convert each number in the nested arrays to its string representation.
stringRep = data.map(num=>num.map(n=>n.toString()))
console.log(stringRep);
console.log('---------------------------------');

// 18) Use filter to get all arrays where the length is greater than 2
data.map(arr=>arr).filter(item=>item.length>2).forEach(a=>console.log(a))
console.log('---------------------------------');

// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.
reverse=data.flat().reduceRight((n1,n2)=>[...n1,n2],[])//spread operator is used to merge the array
console.log('nested arrays in reverse order',reverse);
console.log('---------------------------------');

//  20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.
a= Array.from(data.flat().filter(num=>num%2==0), num=>num**2)
console.log(a);
console.log('---------------------------------');

//21) Sort the nested arrays based on the length of each array.-cancelled question

//22) Use map to convert each number in the nested arrays to its negative.
const negativeNumbers = data.map(innerArray => innerArray.map(number => -number));
console.log(negativeNumbers);
console.log('---------------------------------');

//23) Use filter to get all arrays where the last number is greater than 10.
a=data.filter(arr=>arr[arr.length-1]>10)
console.log('all arrays where the last number is greater than 10:',a);
console.log('---------------------------------');

 //24) Use reduceRight to get the difference between consecutive numbers in each nested array.
 const differences = data.map(innerArray =>
  
    innerArray.reduceRight((acc, curr, index, arr) => {
      if (index !== arr.length - 1) {
        acc.unshift(arr[index + 1] - curr);
      }
      return acc;
    }, [])
  );
  console.log('difference between consecutive numbers in each nested array:',differences);
 console.log('---------------------------------');

//25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.
a= Array.from(data.flat().filter(num=>num%2==0), num=>Number(Math.sqrt(num).toString().slice(0,3)))
console.log("array of square roots of all even numbers in the nested arrays :",a);
console.log('---------------------------------');

 //26) Use includes to check if the number 15 is present in any of the nested arrays.
 console.log(data.flat().includes(15)?'number 15 is present':'number 15 not present')
console.log('---------------------------------');

//27) Use map to convert each number in the nested arrays to its absolute value.
//The absolute value of a number is the distance of that number from zero on the number line.
console.log('map to convert each number in the nested arrays to its absolute value:',data.map(arr=>arr.map(num=>num)));
console.log('---------------------------------');

//28) Use filter to get all arrays where the first number is less than 5.
a=data.filter(arr=>arr[0]<5)
console.log('all arrays where the first number is less than 5:',a);
console.log('---------------------------------');

//29) Use reduceRight to concatenate and flatten all nested arrays in reverse order. - cancelled the question

//30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.
a= Array.from(data.flat().filter(num=>num>5))
console.log(' create an array of numbers greater than 5 from the nested arrays:',a);
console.log('---------------------------------');


