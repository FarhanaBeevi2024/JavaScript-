//w.a.p to print common numbers from a given arrays
p=[10,11,12,20,30]
q=[11,20,25,30,33]
//11,20,30

//index for p
a=0
//index for q
b=0

isPresent = false

while (a<p.length && b<q.length)//3<5 && 1<5//4<5 && 3<5
{
    if(p[a]==q[b]) //10==11//11==11//12==20//20==20/30==25
    {
        console.log(p[a]);
        isPresent = true
        a++
        b++
    }
    else if (p[a]> q[b])//10>11//12>20//30>25
    {
        b++
    }
    else{
        a++
    }
}
!isPresent && console.log('no common numbers')