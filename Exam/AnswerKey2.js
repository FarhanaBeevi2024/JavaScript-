const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ]

//1) find the sum of all numbers in the nested array.
console.log('find the sum of all numbers in the nested array.');
console.log('----------------------'); 
sum = data.flat().reduce((n1,n2)=>n1+n2)
console.log(sum);
console.log('----------------------'); 


//2) find the largest and the smallest number
console.log('largest number');
console.log('----------------------'); 
lar = data.flat().reduce((n1,n2)=>n1>n2?n1:n2)
console.log(lar);
console.log('----------------------'); 
console.log('smallest number');
sma = data.flat().reduce((n1,n2)=>n1<n2?n1:n2)
console.log(sma);
console.log('----------------------'); 


//3)find the average of all numbers in the given array.
console.log(' average of all numbers in the given array.');
console.log('----------------------'); 
Average = data.flat().reduce((n1,n2)=>n1+n2)/data.flat().length
console.log(Average);
console.log('----------------------'); 
