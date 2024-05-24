//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for(i=1; i<=10;i++)
{
    str=' '
    if(i<5){
        for(space=5; space>i;space--)
        {
            str= str+' '
        
        }
        for(j=1;j<=i;j++)
        {
            str= str + ' *'

        }
    }
    else{
        for(space=6;space<=i;space++)
        {
            str=  str + ' '

        }
        for(j=10;j>i;j--)
        {
            str= str+' *'

        }
    }
    console.log(str);
}





// for(row=1; row<=5;row++) //1<=4//2<=4
// {
//     str=''//''//''
//     for (space=4; space>=row;space--) //4>1//3>1//2>1//1>1//4>2//3>2//2>2
//     {
//         str= str + ' ' //###//##
//     }
//     for(col=1;col<=row;col++)//1<=1//2<=1//1<=2//2<=2//3<=2
//     {
//         str= str + '* ' //###*//##**
//     }
//     console.log(str); //###*//##**
       
// }
//   for(row=1; row<=4;row++) //1<=4//2<=4
// {
//     str=''//''//''
//     for (space=4; space>=row;space--) //4>1//3>1//2>1//1>1//4>2//3>2//2>2
//     {
//         str= str + ' ' //###//##
//     }
//     for(col=1;col<=row;col++)//1<=1//2<=1//1<=2//2<=2//3<=2
//     {
//         str= str + '* ' //###*//##**
//     }
//     console.log(str); //###*//##**
       
// }