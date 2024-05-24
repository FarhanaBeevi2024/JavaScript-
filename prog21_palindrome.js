//write a program to check whether the given number is palindrome or not
//eg :121

num =121
remainder =0
reverse = 0
temp=num

console.log('given number is',num);
while(num>0)
{
    remainder = num%10
    reverse = (reverse*10)+remainder
    num = Math.floor(num/10)
    
}
if(reverse ==temp)
{
    console.log('given number is palindrome');

}
else
{
    console.log('given number is not palindrome');
}

//temp==reverse?console.log('palindrome') : console.log('not palindrome');