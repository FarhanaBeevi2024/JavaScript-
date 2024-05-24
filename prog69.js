a = [10,11,12,13,14,15]

// write a program to find square of each element in the given array.

sq = a.map(num=> num**2)
console.log(sq);

for(let num of a)
{
    console.log(num**2);
}

console.log('----------------------------------');

//forEach()

a.forEach(num =>
    {
        console.log(num**2);

    });
