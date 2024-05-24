//2  3  4 5 6
//24  369   4936  61725
//2*12  // 3*123  // 4*1234  //5*12345 (solution pattern 1)

n=5
i=1
str = ""
pro = 0
while(i<=n) //1<=3//2<=3//3<=3//4<=3
{
str = str + i//""+1="1"//"1"+2="12"//"12"+3="123"
i++ //2//3//4
}
pro = n*str
console.log(pro);



//2+22 //3+33+333//4+44+444+4444 (solution pattern 2)
m=5
j=1
str = ""
sum = 0

while(j<=m)
{
str = str +m
sum = sum + Number (str)
j++
}
console.log(sum);
