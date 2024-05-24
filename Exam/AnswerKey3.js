
 //3) string


//1) Write a JavaScript function that checks whether a string ends with a specified suffix.

const wordCheck = (word,pattern)=>{
    console.log(word.endsWith(pattern)?'yes':'no')

}
wordCheck('Malayalam','lam')

console.log('-------------------------------')

//2) Write a JavaScript program to find the most frequent character in a given string.
str = 'hello all'
wc={}
highestvalue=0
newkey=''
str.replaceAll(' ','').split('').map(item=>item in wc?wc[item]+=1:wc[item]=1)
for(key in wc){
    if(wc[key]>highestvalue){
        highestvalue=wc[key]
        newkey = key
    }
}
console.log('Highest occurrence letter is :',newkey);

console.log('-------------------------------')



//3) Write a JavaScript function to split a string and convert it into an array of words.
const splitFunction = (str)=>{
     return str.split(' ')
}
console.log(splitFunction('hello all'));

console.log('-------------------------------')


//4) Write a function that determines if two strings are anagrams of each other
// Dormitory = ‘Dirty room’

const anagramFunction1= (str1,str2)=>{
    arr1=str1.replace(' ','').toLowerCase().split('').sort()
    arr2=str2.replace(' ','').toLowerCase().split('').sort()
     if (arr1.length !== arr2.length) {
        return false;
    }
    // Compare each element of the arrays
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    // If all elements are equal, return true
    return true;
}

console.log(anagramFunction1('Dormitory','Dirty room')?'yes':'no')


console.log('--------------------or----------------------');


const anagramFunction = (str1,str2)=>{
    arr1=str1.replace(' ','').toLowerCase().split('').sort().join('')
    arr2=str2.replace(' ','').toLowerCase().split('').sort().join('')
    
    return arr1 == arr2;
}

console.log(anagramFunction('Dormitory','Dirty room')?'yes':'no')




