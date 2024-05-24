//w.a.p to print common numbers from a given arrays
p=[10,11,12,20,30]
q=[11,20,25,30,33]
//11,20,30

isFound = false
for(let i of p)
{
    for(let j of q)
    {
        if(i==j)
        {
            isFound = true
            console.log(i);
        }
    }
}
!isFound && console.log('no common number');

// noCommon =false
// for(i=0;i<b.length;i++)
// {
//     for(j=i+1;j<b.length;j++)
//     {
//         if(b[i]==b[j])
//         {
//             noCommon =true
//             console.log( );
//         }
//     }
// }
// !noPairs && console.log('no such pairs');