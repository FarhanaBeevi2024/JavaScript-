//array


weekdays = ['mon','tue','wed', 'thur']

//display an array
console.log(weekdays);

//total number of items in an array

console.log(weekdays.length);

//print wed from the given array
console.log(weekdays [2]);
console.log(weekdays [3]);

//add friday to given array
//push

weekdays.push('fri');
console.log(weekdays);

//add 3 to the given array

weekdays.push('3');
console.log(weekdays);

//remove 3 from the given array

weekdays.pop('3');
console.log(weekdays);

//add sun to the given array
weekdays.unshift('sun');
console.log(weekdays);

weekdays.unshift('sat');
console.log(weekdays);

weekdays.shift('sat');
console.log(weekdays);
