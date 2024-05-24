//pattern printing

//# # # #
//# # # #
//# # # #
//# # # #
//write a program to print the given pattern

for(row=1; row<=4;row++) //1<=4//2<=4//3
{
    str=''//''//''//''//
    for(col=1;col<=4;col++)//1<=4//2<=4//3<=4//4<=4//5<=4
    {
        str=str+'#' + ' ' //''+'#'//'#'+'#'='##'//'##'+'#'='###'//'###'+'#'='####'
    }
    console.log(str);//'####'//'####'
}

//# # # #

// for (i = 1; i <= 4; i++) {
//   let str = "";
//   for (j = 1; j <= 4; j++) {
//     str = str + "# ";
//   }
//   console.log(str);
// }

console.log("........................");

// write a program to print following pattern
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(row=1; row<=4;row++)
{
    str=''
    for(col=1;col<=4;col++)
    {
        str=str+row+' '
    }
    console.log(str);
}

 console.log('........................');

// write a program to print following pattern
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(row=1; row<=4;row++)
{
    str=''
    for(col=1;col<=4;col++)
    {
        str=str+col+' '
    }
    console.log(str);
}




