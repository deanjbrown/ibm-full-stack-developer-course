const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "JavaScript",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    specialization: "Python",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Java",
  },
  //... More employee records can be added here
];

// Displays all employee details in the employeesDetails div
function displayEmployeeDetails() {
  const employeesList = employees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");

  document.getElementById("employeesDetails").innerHTML = employeesList;
}

// Calculates and displays the total salaries of all employees
function calculateTotalSalaries() {
  const totalSaleries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSaleries}`);
}

// Displays employees from the HR department
function displayHREmployees() {
  // Filter for employees in the HR department
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  // Map the filtered employees to HTML and join them into a single string
  const hrList = (hrEmployeeList = hrEmployees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join(""));

  // Update the employeesDetails div with the HR employees
  document.getElementById("employeesDetails").innerHTML = hrList;
}

// Finds and displays an employee by their ID
function findEmployeeById(id) {
  const result = employees.find((employee) => employee.id === id);
  if (result) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${result.id}: ${result.name} - ${result.department} - $${result.salary}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "Could not find employee with ID " + id;
  }
}

// Finds and displays an employee by their specialization
function findEmployeeBySpecialization(specialization) {
  const result = employees.find(
    (employee) => employee.specialization === specialization
  );
  if (result) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${result.id}: ${result.name} - ${result.department} - $${result.salary}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "Could not find employee with specialization " + specialization;
  }
}
