array = [10,20,30,40,30,20,50,30,60,70,10,40,80]

//w.a.p to find the number count from the given array and display as an object

obj = {}
array.forEach(item=>item in obj?obj[item]+=1:obj[item]=1)
console.log(obj);

console.log('------------------------------------------');

//w.a.p to find the first recursive letter  
//B
pattern = 'ABCBBCAACB'
obj1 = {}
// 
obj1={}
character = Array.from(pattern)
for(char of character){
    if(char in obj1)
    {
        console.log(char);
        break
    }
    else
    {
        obj1[char]=1
    }
}