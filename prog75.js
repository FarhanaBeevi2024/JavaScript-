//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]


// print all employee name 

//print total numbers of employee


//print developer employee details

// print details of employee Laisha

//sort employee based on their salary in descending order


//sort employee based on their experience in ascending order


// print the employ name whose have the higest salary


console.log('-----------------------------------------------------');



// print all employee name 

console.log('employee name is :');

/*employee.forEach(emp => {console.log(emp)});*/
employee.forEach(emp => {console.log(emp[1])});

console.log('----------------------------------');


//print total numbers of employee

console.log(`total numbers of employee is ${employee.length}`);


console.log('----------------------------------');


//print developer employee details

console.log('developer employee details');

DeveloperEmployeeDetails = employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))

console.log('----------------------------------');

// print details of employee Laisha

console.log('details of employee Laisha');

// laisha = employee.find(emp=>emp[1]=='Laisha')
// console.log(laisha);

//incase of morethan one Laisha named emplyees is there
laisha = employee.filter(emp=>emp[1]=='Laisha').forEach(pro=>console.log(pro));

console.log('----------------------------------');


//Print employee name whose salary >30000

console.log('employee name whose salary >30000');



console.log('----------------------------------');



// print the employ name whose have the higest salary

console.log('employee name whose have the highest salary');
empsal1 = employee.reduce((emp1,emp2) => emp1[4]>emp2[4] ? emp1:emp2)
console.log(empsal1[1]);


console.log('----------------------------------');

// print the employ name whose have the lowest salary

console.log('employee name whose have the lowest salary');
empsal1 = employee.reduce((emp1,emp2) => emp1[4]<emp2[4] ? emp1:emp2)
console.log(empsal1[1]);

console.log('----------------------------------');


//total salary expense of the company
console.log('total salary expense of the company');
totalEx=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(totalEx);
console.log('----------------------------------------------');