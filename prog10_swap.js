// write a program to swap two numbers
num1 = 20
num2 = 30
/*
temp=num1
num1=num2
num2=temp
console.log(num1);
console.log(num2);
*/

console.log(`value of num1 is ${num1} and value of num2 is ${num2}`);
temp = num1 //20
num1 = num2//30
num2 = temp//20
console.log(`value of num1 is ${num1} and value of num2 is ${num2}`);


num3 = 60
num4 = 40
console.log(`value of num3 is ${num3} and value of num4 is ${num4}`);

num3 = num3 + num4//60+40 = 100
num4 = num3 - num4//100-40 = 60
num3 = num3 - num4// 100-60 = 40
console.log(`value of num3 is ${num3} and value of num4 is ${num4}`);
