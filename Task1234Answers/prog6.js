
// Write a function calculateAverage that takes an array of numbers as input and returns the average value

const calculateAverage = (...arg)=>{
     return ((arg.reduce((n1,n2)=>n1+n2))/arg.length)
}

console.log(calculateAverage(2,6,6,6))