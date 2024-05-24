//write a program to print 1 - 5 using for loop

for(i=1;i<=5;i++) //1<=5//2<=5//3<=5//4<=5//5<=5
{
    console.log(i);//1//2//3//4//5
}

console.log('........................');
//write a program to find the factorial of given number using for loop

num = 4
fact = 1
for(i=1;i<=num;i++)
{
fact = fact*i
}
console.log(fact);

console.log('........................');
//write a program where loop can iterate upto 10 but print till 5

for(i=1;i<=10;i++)
{
    if(i<=5)
    {
        console.log(i); 
    } 
}

//other method
for(i=1;i<=10;i++)
{
    console.log(i); 
    if(i>=5)
    {
       break 
    }          
}