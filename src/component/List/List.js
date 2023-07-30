import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { getListEmployees, deleteEmployee } from "../../storage/LocalStorage";
import "../AddEmp/Add.css"

function List() {
  const Navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const removeEmployee = () => {
    deleteEmployee();
    setEmployees(getListEmployees());
  };

  useEffect(() => {
    setEmployees(getListEmployees());
  }, []);
  return (
    <div>
      <div className="container p-4">
        <Button onClick={() => Navigate("/add")}>create An Employee</Button>
        <div className="pt-3 text-center">
          <h2 className="text-secondary p-2">Manage Employees</h2>
          <div className="formadd">
          <input
            className="form-control mb-4 w-50 bg-light  text-center"
            type="test"
            placeholder="seach employee name here"
            onChange={(e)=>setSearch(e.target.value)}
          ></input>
          {employees.length > 0 ? (
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.filter((employee) => {
                    return search.toLowerCase() === ""
                      ? employee
                      : employee.name.toLowerCase().includes(search);
                  }).map((employee) => (
                  <tr>
                    <td>{employee.name}</td>
                    <td>{employee.jobtitle}</td>
                    <td>{employee.email}</td>
                    <td>
                      <div className="d-flex gap-3">
                        <span
                          role="button"
                          className="buttons bg-success w-50 text-white"
                          onClick={() => Navigate(`/edit/${employee.id}`)}
                        >
                          Edit
                        </span>
                        <span
                          role="button"
                          className="buttons bg-danger w-50 text-white"
                          onClick={() => removeEmployee()}
                        >
                          Delete
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <h3 className="text-center">No Employees</h3>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
