//input array = [4,5,6]
//output array = [11,10,9]


//here their elements sum will get as 15
//15-4=11,15-5=10,15-6=9

input = [4,5,6]
sum=0
for(let i of input)//4//5//6
{
    sum = sum+i//0+4=4//4+5=9//9+6=15
}
output = []//empty array initialised
for(let num of input)//4//5//6
{
    output.push(sum-num)//15-4=11//15-5=10//15-6=9
}
console.log(output);
