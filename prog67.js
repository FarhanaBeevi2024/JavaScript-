//write a program to find even numbers from the given array  
a = [[2,10], [50,25], [2,[13,11],100], [7,[2,55],66],[33,9]]

//flat

b = a.flat(2)
console.log(b);

for(let num of b)
{
    if(num%2==0)
    {
        console.log(num);
    }
}