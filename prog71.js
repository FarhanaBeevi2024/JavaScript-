//reduce() method

a = [10,11,2,7,3,6,1]

//write a prog to find the highest of the given array.

highest = a.reduce((n1,n2) => n1>n2?n1:n2)
console.log(highest);

//write a prog to find the lowest of the hiven array.

lowest = a.reduce((n1,n2) => n1<n2?n1:n2)
console.log(lowest);

//write a prog to find the sum of the given array

sum = a.reduce((n1,n2)=> n1+n2)
console.log(sum);
