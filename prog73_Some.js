//some()

//write a prog to check is there any  numbers >13 exist in the given array.
a = [10,12,15,13,25,2,3,5]
c = a.some(num=>num>13)
console.log(c?'yes': 'no');