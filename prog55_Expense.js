expense = [12000, 24000, 10000,35000, 54000, 40000]

//find the lowest expense
//find the highest expense
//find the total expense


let max =expense[0]
let min=expense[0]
total = 0

for(i=0; i<expense.length;i++)
{
    if (expense[i]>max)
    {
        max=expense[i];
    }
    else if(expense[i]<min)
    {
        min=expense[i];
    }
    total= total+expense[i];
}
console.log(max);
console.log(min);
console.log(total);


//another method
//to find the lowest expense

// expense = [12000, 24000, 10000,35000, 54000, 40000]

// console.log(typeof(expense));

// lowest = expense[0] //12
// for(let num of expense)//12//24//35//10//54//40
// {
//     if(num<=lowest)//12<=12//24<=12//35<=12//10<=12//54<=10//40<=10
//     {
//         lowest = num//10
//     }
// }
// console.log(lowest);



//to find the highest expense

// expense = [12000, 24000, 10000,35000, 54000, 40000]

// console.log(typeof(expense));

// highest = expense[0] 
// for(let num of expense)
// {
//     if(num>=highest)
//     {
//         highest = num
//     }
// }
// console.log(highest);

//to find the total expense

// sum=0

// for