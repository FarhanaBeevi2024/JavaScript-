// 1. Create Employee class to facilitate the creation of a new employee record.
class Employee {
    constructor(name, salary, employeeID) {
      this.name = name;
      this.salary = salary;
      this.employeeID = employeeID;
    }
  
    // 2. Scenario: Does the Employee class display a "Salary Adjustment Failed" message during a salary change?
    changeSalary(newSalary) {
      if (newSalary < 0) {
        console.log("Salary Adjustment Failed: New salary cannot be negative.");
        return;
      }
      this.salary = newSalary;
      console.log(`Salary adjusted for ${this.name} to $${this.salary}.`);
    }
  }
  
  // 3. Create a new instance of the Employee class and set up a record for an employee named 'Alice' with an initial salary of $50000 and an employee ID of 1001.
  const alice = new Employee('Alice', 50000, 1001);
  
  // 4. Create a new instance of the Employee class for an employee named 'Bob' with an initial salary of $75000 and an employee ID of 1002.
  const bob = new Employee('Bob', 75000, 1002);
  
  bob.changeSalary(1000)
  
  // 5. Function to sort the salaries of employees.
  function sortSalaries(employees) {
    employees.sort((a, b) => a.salary - b.salary);
  }
  
  // Example usage:
  const employees = [alice, bob];
  sortSalaries(employees);
  console.log(employees);

  