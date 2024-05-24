// Sample data with mixed types in nested arrays
const mixedData = [
    [1, 'apple', 3, 'banana'],
    [4, 'orange', 6, 'grape'],
    [7, 'pear', 9, 'kiwi'],
    [10, 'melon', 12, 'strawberry']
];

// 1) Use map to create an array of strings containing both the type and value of each element.
const stringsArray = mixedData.map(arr => arr.map(item => `${typeof (item)} ${item}`));
console.log(stringsArray);
console.log('----------------------------');
// 2) Use filter to get all arrays where the length of strings is greater than the sum of numbers
const filteredArrays = mixedData.filter(arr => {
    const sumOfNumbers = arr.reduce((acc, curr) => typeof curr === 'number' ? acc + curr : acc);
    const lengthOfStrings = arr.filter(item => typeof item === 'string').join('').length;
    return lengthOfStrings > sumOfNumbers;
});

console.log(filteredArrays);
console.log('----------------------------');

//  3) Use reduce to concatenate all strings in the nested arrays into a single sentence.
sentence = mixedData.map(item => item.filter(item => typeof (item) == 'string').reduce((n1, n2) => n1 + n2)).reduce((w1, w2) => w1 + w2)
console.log(sentence);
console.log('----------------------------');

// 4) Use arrayFrom to create an array of unique strings from the nested arrays.
const uniqueStrings = Array.from(mixedData.map(item => item.filter(item => typeof (item) == 'string')).flat());
console.log(uniqueStrings);
//  5) Use sort to sort the nested arrays based on the length of strings in each array.
arrange = mixedData.sort((a, b) => a.filter(item => typeof (item) == 'string').join('').length - b.filter(item => typeof (item) == 'string').join('').length)
console.log(arrange);
console.log('----------------------------');

//  6) Use map to convert each string in the nested arrays to its uppercase form.
upperCaseArray = mixedData.map(arr => arr.map(item => typeof (item) == 'string' ? item.toUpperCase() : item))
console.log(upperCaseArray);
console.log('----------------------------');

//  7) Use filter to get all arrays where the sum of numbers is greater than 20.
arr = mixedData.filter(item => (item.reduce((n1, n2) => typeof (n2) == 'number' ? n1 + n2 : n1)) > 20)
console.log(arr);
console.log('----------------------------');

// 8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
reverse = mixedData.reduceRight((n1, n2) => [...n1, n2], [])
console.log('nested arrays in reverse order', reverse);
console.log('----------------------------');

// 9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.
a = mixedData.map(item => item.filter(item => typeof (item) == 'string').map(item => item.length))
console.log(a);
console.log('----------------------------');

//  10) Use includes to check if the word 'apple' is present in any of the nested arrays.
console.log(mixedData.map(item => item.includes('apple')) ? 'apple is present in  the nested arrays' : 'apple is not present in the nested arrays')

console.log('----------------------------');
