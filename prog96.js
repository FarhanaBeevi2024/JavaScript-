//example Student

class Student{
    
//constructor
constructor(id,name,course, mark){
    this.studId = id
    this.studName = name
    this.studCourse = course
    this.studMark = mark
    this.studentDisplay()

}
//method
studentDisplay(){
    console.log(`Student details : id is ${this.studId} name :${this.studName},course is ${this.studCourse}) ,mark is ${this.studMark}`);
}
}

const stud1 = new Student(1,'manu','Btech', 100)
const stud2 = new Student(2,'deepu','Bcom', 90)
const stud3 = new Student(3,'priya','BCA', 80)