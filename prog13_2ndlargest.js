// HW :write a program to find the second largest among three numbers and arrange them in descending order
/*const num1 = 10;
const num2 = 30;
const num3 = 15;

let largest, secondLargest, Smallest;

if (num1 > num2 && num1 > num3) {
  largest = num1;
  if (num2 > num3) {
    secondLargest = num2;
    Smallest = num3;
  } else {
    secondLargest = num3;
    Smallest = num2;
  }
}
else if (num2 > num1 && num2 > num3) {
  largest = num2;
  if (num1 > num3) {
    secondLargest = num1;
    Smallest = num3;
  } else {
    secondLargest = num3;
    Smallest = num1;
  }
}
else {
  largest = num3;
  if (num1 > num2) {
    secondLargest = num1;
    Smallest = num2;
  } else {
    secondLargest = num2;
    Smallest = num1;
  }
}

// display the result
console.log(largest);
console.log(secondLargest);
console.log(Smallest); */


n1= 500
n2= 200
n3= 300

if(n1>n2){
    if(n2>n3){
        console.log(`second largest is ${n2}`);
        console.log(`descending order : ${n1}, ${n2}, ${n3}`);
    }
    else{
        console.log(`second largest is ${n3}`);
        console.log(`descending order : ${n1}, ${n3}, ${n2}`);
    }
}
else if (n2>n1){
    if(n1>n3){
        console.log(`second largest is ${n1}`);
        console.log(`descending order : ${n2}, ${n1}, ${n3}`);
    }
    else{
        console.log(`second largest is ${n3}`);
        console.log(`descending order : ${n2}, ${n3}, ${n1}`);
    }
}
else if(n3>n1){
    if (n1>n2){
        console.log(`second largest is ${n1}`);
        console.log(`descending order : ${n3}, ${n1}, ${n2}`);
    }
    else{
        console.log(`second largest is ${n2}`);
        console.log(`descending order : ${n3}, ${n2}, ${n1}`);
    }
}
else{
    console.log(`all are equal`);
}
