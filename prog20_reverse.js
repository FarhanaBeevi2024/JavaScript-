//write a program to find the reverse of a given number using while loop


//123 - 321
//23/10 = 3
//2.3

num =123 //321
remainder = 0
reverse = 0
console.log('given number is', num);
while(num>0) //123>0//12>0//1>0//0>0
{
    remainder= num%10//0=123%10=3//12%10=2//1%10=1
    reverse = (reverse*10)+remainder//0=0*10+3=3//3*10+2=30+2=32//32*10+1=321
    num = Math.floor(num/10);//123/10=12.3=12//12/10=1.2=1//1/10=0.1=0
}
console.log('reverse of the given number is ',reverse);