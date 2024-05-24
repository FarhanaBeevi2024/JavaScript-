//write a program to find fizz when a number is divisible by 3 (should give a remainder (modulus %)zero )
         //buzz when a number is divisible by 5
         //fizzbuzz when a number is divisible by 15


num1=30

if (num1 % 15==0)
{
    console.log(`fizzbuzz`);
}
else if (num1 % 5==0 )
{
    console.log(`buzz`);
}
else if (num1 % 3 ==0 )
{
    console.log(`fizz`);
}
else 
{
    console.log(`${num1} is not divisible by 3, 5, 15`);
}