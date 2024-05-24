//write a program to check a given number is prime number or not
//prime number : have two factors - 1 and the number itself.
//
num =25
isPrime=true
if(num>1)
{
    for(i=2;i<num;i++) //2<4
    {
        if(num%i==0) //4%2==0//
        {
            isPrime =false //false
            break
        }
    }
}

else{
    isPrime =false
}
isPrime?console.log('PRIME'):console.log('NOT PRIME');
