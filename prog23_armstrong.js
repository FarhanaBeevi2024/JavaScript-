//write a program whether the given number is armstrong or not.
//armstrong numbers are those numbers that are equal to sum of their on didgit raise to the power number of digits
//eg : 153 = 1**3 + 5**3 + 3**3 = 153
// 1634 = 1**4 + 6**4 + 3**4 + 4**4

num=153
sum=0
temp=num

while(temp>0)
{
    remainder = temp%10;
    sum =sum + (remainder* remainder *remainder)
    temp = Math.floor(temp/10)
}
if(sum ==num)
{
    console.log(`${num} is an Armstrong number`);
}
else{
    console.log(`${num} is not an Armstrong number`);
}

//num=153
//temp=num
//remainder=0
//sum=0
//while(num>0) // 153>0  //15>0//1>0 //0>0
//{
 //  remainder = num%10 //153%10=3 // 15%10=5 // 1%10=1
 //  sum= sum +remainder**3 // 0+3**3=27//27+125=152//152+1=153
 //  num= Math.floor(num/10) //153/10=15.3=15//15/10=1.5=1//1/10=0.1=0
//}
//if(temp==sum) //153==153
//{
 //   console.log(`its an Armstrong number`);
//}
//else{
 //   console.log(`its not an Armstrong number`);
//}

//another method

//num=153
//power=(num+'').length
//temp=num
//remainder=0
//sum=0
//while(num>0) 
//{
 //  remainder = num%10 
 //  sum= sum +remainder**power
 //  num= Math.floor(num/10) 
//}
//temp==sum?console.log('its an armstrong number'): console.log('its not an armstrong number');