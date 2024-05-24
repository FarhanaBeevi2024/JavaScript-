//a=[10,20,30,20,30,40,50,60,10]
//w.a.p to find the duplicate number from the given array = 10,20,30

a=[10,20,30,20,30,40,50,60,10]
isDuplication = false
for(i=0;i<=a.length;i++)
{
    for(j=i+1;j<=a.length;j++)
    {
        if(a[i]==a[j])
        {
            isDuplication=true
            console.log(a[i]);
    
        }
    }
}

!isDuplication && console.log('no duplication');
//ternaryoperator
//ternary condition?true:false

//truthee operator&&
//console.log(isDuplication?'true' : 'false')