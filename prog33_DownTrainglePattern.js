// * * * * 
// * * *
// * *
// *

for(row=4; row>=1;row--) //4>=1//3>=1//2<=1//1>=1
{
    str=''//''//''//''//''
    for(col=1;col<=row;col++)//1<=4//2<=4//3<=4//4<=4//5<=4//1<=3//2<=3//3<=3//4<=3///1<=2//2<=2//3<=2//1<=1//2<=1
    {
        str= str +'*' + ' ' //''+'*'='*'//'*'+'*'='**'//'**'+'*'='***'//'***'+'*'='****'///.......
    }

    console.log(str);//'****'//'***'//'**'//'*'
}