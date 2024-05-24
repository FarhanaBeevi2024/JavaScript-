const programmingLanguages = [
  {
    name: "JavaScript",
    yearCreated: 1995,
    paradigms: ["Imperative", "Functional"],
    popular: true,
    creator: "Brendan Eich",
  },
  {
    name: "Python",
    yearCreated: 1991,
    paradigms: ["Imperative", "Object-oriented", "Functional"],
    popular: true,
    creator: "Guido van Rossum",
  },
  {
    name: "Java",
    yearCreated: 1995,
    paradigms: ["Object-oriented", "Imperative"],
    popular: true,
    creator: "James Gosling",
  },
  {
    name: "C++",
    yearCreated: 1983,
    paradigms: ["Object-oriented", "Procedural"],
    popular: true,
    creator: "Bjarne Stroustrup",
  },
  {
    name: "Ruby",
    yearCreated: 1995,
    paradigms: ["Object-oriented", "Imperative"],
    popular: true,
    creator: "Yukihiro Matsumoto",
  },
];

// Question 1: Print the names of all programming languages in the array.
console.log('Print the names of all programming languages in the array.');
programmingLanguages.forEach(item=>console.log(item.name))
console.log('---------------------------------');
// Question 2: Print the total number of programming languages in the array.
console.log('Total number of programming languages in the array:', programmingLanguages.length);
console.log('---------------------------------');

//Question 3: Print the languages that are popular.
console.log('languages that are popular:')
programmingLanguages.filter(item=>item.popular==true).forEach(item=>console.log(item.name))
console.log('---------------------------------');

// Question 4: Print the names of the languages created after the year 2000.
console.log('names of the languages created after the year 2000.');
lang=programmingLanguages.filter(item=>item.yearCreated>2000)
console.log(lang.length==0?'not languages':lang)
console.log('---------------------------------');

//Question 5: Print the languages that are both functional and object-oriented.

 lang = programmingLanguages.filter(language =>language.paradigms.includes("Functional") && language.paradigms.includes("Object-oriented")
);
console.log('languages that are both functional and object-oriented.',lang);
console.log('---------------------------------');
