//write a program to find the cube of a given number using map

a = [10,11,12,13,14,15]

cube = a.map(num=>num**3)
console.log(cube);

//write a program to create a new array with number<=13 increment by 1 and number >13 decremnet by 1
//o/p = [11,12,13,14,13,14]

b=a.map(num => num<=13? num+1:num-1)
console.log(b);