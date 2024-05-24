//1) Write a program that prints the numbers from 1 to 100.
//But for multiples of three, print "Fizz" instead of the number, and
//for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."

// for(i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         console.log('FizzBuzz');
//     }
//     else if(i%5===0){
//         console.log('Buzz');
//     }
//     else if(i%3===0){
//         console.log('Fizz');
//     }
//     else{
//         console.log(i);
//     }
// }

///////////////////////////////////////////////////////////////////////////////
// inputArray = [];
// for (i = 1; i <= 100; i++) {
//   inputArray.push(i);
// }
// console.log("input", inputArray);

// outputArray = inputArray.map((i) => {
//   if (i % 3 === 0 && i % 5 === 0) {
//     return "FizzBuzz";
//   } else if (i % 5 === 0) {
//     return "Buzz";
//   } else if (i % 3 === 0) {
//     return "Fizz";
//   } else {
//     return i;
//   }
// });
// console.log("output" ,outputArray);
/////////////////////////////////////////////////////////

fizzBuzzNumbers = [];
for (let i = 1; i <= 100; i++) {
  fizzBuzzNumbers.push(i);
}

fizzBuzzNumbers.forEach((value) => {
  if (value % 3 === 0 && value % 5 === 0) {
    console.log('FizzBuzz');
  } else if (value % 3 === 0) {
    console.log('Fizz');
  } else if (value % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(value);
  }
});
