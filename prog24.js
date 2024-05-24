//write a program to display numbers whose exponential is in the range of 8 to 36, where user can input power value
//power - 2=> 1 4 9 16 25 36 49 = 3, 4, 5
//power - 3 => 1 8  27  64  125  216 = 2, 3

power = 2
low = 8
up = 36
num = 1
while(num<=36) //1<=36//2<=36//3<=36/4<=36
{
    if(low <= num**power && num**power<up)//8<=1//8<=4//8<=9 && 9<=36 // 8<=16 && 16<36 // 8 <=25 && 25<36//8<=36 && 36<36
    {
        console.log(num); //3//4//5
    }
    num++ //2//3//4//5//6/7
}
