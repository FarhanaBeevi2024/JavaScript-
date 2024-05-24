
//OOPS

//[id, name, designation, location, salary, experience]

//employee =[ 
    //[1000,'Neel','developer','kochi',25000,3],

    class Employee{
        empName
        empDesig
        empLocation
        empSalary
    

    //constructor
    constructor (eName,eDesg,empLo,empSal){
        this.empName = eName
        this.empDesig = eDesg
        this.empLocation = empLo
        this.empSalary = empSal
    }


    //methods
    display(){
        console.log(`employee name is ${this.empName}`);
    }
}

//object

const obj = new Employee('Neel','developer','kochi',25000 )
obj.display()

const obj1 = new Employee('Max','hr','trivandrum',15000 )
obj1.display()

