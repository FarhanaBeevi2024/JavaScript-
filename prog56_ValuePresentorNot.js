//w.a.p to check whether 2 is present or not

arr = [10,11,12,3,21,4]

searchItem = 2
isPresent = false
count=0
for(num of arr)//10//11
{
    count++
    if(num==searchItem)//10==2//11=2
    {
        isPresent = true
        break
    }
}
console.log(count);
console.log(isPresent?'present' : 'not present');



//Another method referred
// if (arr.indexOf(2)>=0)
// {
//     console.log('2 is present');
// }
// else
//     {
//         console.log('2 is not present');
//     }

    