//write a program to display all armstrong numbers between 8 - 500


for(num=8; num<=500; num++)
{
    power = (num+'').length // to get number of digits in a number
    sum=0
    temp = num

    if(power!=1)
    {
        while(temp>0)
        {
            remainder = temp%10
            sum = sum+remainder**power
            temp = Math.floor(temp/10)
        }
    }
        else
        {
            sum=0
        
        }
    if (sum==num)
    {
    console.log(num);
    }
    }



// for(i=8; i<=500;i++)
// {
//     sum=0
//     temp=i
//     digits = i.toString().length;

//     while(temp>0)
//     {
//         remainder = temp%10
//         sum = sum + remainder**(digits)
//         temp = Math.floor(temp/10)
//     }
//     if(sum==i)
//     {
//         console.log(i);
//     }
// }