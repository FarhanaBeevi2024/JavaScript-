//*
//* *
//* * *
//* * * *

for(row=1; row<=4;row++) //1<=4//2<=4//3<=4
{
    str=''//''//''//''//
    for(col=1;col<=row;col++)//1<=1//2<=1//1<=2//2<=2//1<=3//2<=3//3<=3
    {
        str= str +'*' + ' ' //''+'*'= '*'//''+'*='*'//'*'+*='**'//''+*='*'//*+*=**/**=*=***
    }

    console.log(str);//'*'//'**'//'***'
}

