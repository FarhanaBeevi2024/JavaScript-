//HW - STUDENT OBJECT  - get add update delete

student = { 

        rollNo : 1234,
        name : 'Anu',
        class : 'LKG',
        school : 'OLFGHS'
}
console.log(student);

console.log(student['name']);
console.log(student.name);

//access or get

for(let key in student)
{
    console.log(key);
}

//add

student["age"] = 5
console.log(student);

//update

student.age +=1
console.log(student);

//delete

delete student.age
console.log(student);