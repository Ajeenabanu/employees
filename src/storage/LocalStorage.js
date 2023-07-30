import uuid from "react-uuid";

export const getListEmployees = () => {
    if (!localStorage["employes"]) {
      localStorage["employes"] = JSON.stringify([]);
    }
  
    let employees = JSON.parse(localStorage["employes"]);
    return employees;
  };
  export const getEmployeeById = (id) => {
    const employees = getListEmployees();
    const employee = employees.find((employee) => employee.id === id);
    return employee;
  };
  export const addEmployee = (employee) => {
    let employees = getListEmployees();
    employees.push({id: uuid(),...employee});
    localStorage["employes"] = JSON.stringify(employees);
    console.log(employees);
  };
  
  export const deleteEmployee = (id) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    localStorage["employes"] = JSON.stringify(employees);
  };
  
  
  
  export const editEmployee = (id, newEmployee) => {
    let employees = getListEmployees();
    employees = employees.filter((employee) => employee.id !== id);
    employees.push(newEmployee);
    localStorage["employes"] = JSON.stringify(employees);
  };