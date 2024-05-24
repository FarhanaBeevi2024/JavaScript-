//       *
//    *     *
//  *         *
// * * * * * * *


for(row=1; row<=4;row++) //1<=4//2<=4
{
    str=' '
   
    for(col=1;col<=7;col++)
    {
        if(col+row==5||col-row==3 || row==4)
        {
          str=str+'*' 
        }
       else
       {
          str=str+' '
       }
    }
    console.log(str); 
       
}
   