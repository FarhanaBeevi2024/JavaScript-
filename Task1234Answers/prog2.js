//2) Write a JavaScript program that returns a subset of a string.
/* Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"] */

input = 'dog'

output=[]
for(i=0;i<=input.length;i++){
    for(j=i+1;j<=input.length;j++){
       output.push(input.slice(i,j))//d//do//dog//o//og//g
    }
}
console.log(output);

