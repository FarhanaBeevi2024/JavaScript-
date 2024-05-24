// 11
// 12 13 
// 14 15 16 
// 17 18 19 20 
// 21 22 23 24 25 
// 26  27 28 29 30 31 

num=11
for(row=1; row<=6;row++)
{
    str=''

    for (space=6; space>=row;space--) 
    {
        str= str + '' 
    }

    for(col=1;col<=row;col++)
    {
        str=str+num+' '
        num++
    }
    console.log(str);
}