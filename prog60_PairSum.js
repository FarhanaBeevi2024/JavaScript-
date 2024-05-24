//write a program to print pairs whose sum is 6

b = [2,3,4,5] //(2,4)


sum=4
noPairs = false
for(i=0;i<b.length;i++)
{
    for(j=i+1;j<b.length;j++)
    {
        if(b[i]+b[j]==sum)
        {
            noPairs=true
            console.log(`${b[i]},${b[j]}`);
        }
    }
}
!noPairs && console.log('no such pairs');