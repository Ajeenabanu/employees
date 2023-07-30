import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import {
  addEmployee,
  editEmployee,
  getEmployeeById,
} from "../../storage/LocalStorage";
import { useParams } from "react-router-dom";
import "./Add.css";

function Add() {
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    jobtitle: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
    }
  }, [id]);

  const handleAddEmployee = (e) => {
    e.preventDefault();
    setShowAlert(true);
    id ? editEmployee(id, inputValues) : addEmployee(inputValues);
    resetForm();
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  return (
    <div>
      <h2 className=" AddEmploye text-center text-secondary p-3">
        {id ? "Update A" : "Create A"} Employee
      </h2>

      <div className="container">
        <div className="formadd">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label for="name"> Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={inputValues.name}
                placeholder="Enter Name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label for="jobtitle"> Employee Job</Form.Label>
              <Form.Control
                type="text"
                name="jobtitle"
                value={inputValues.jobtitle}
                placeholder="Enter Job Title"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label for="email"> Employee email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={inputValues.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button
              onClick={(e) => handleAddEmployee(e)}
              className="me-5 mt-4 p-2"
              variant="primary"
              type="submit"
            >
              Create An Employee
            </Button>
            <Link to={"/List"}>
              <Button className="ms-5 mt-4 p-2" variant="danger" type="submit">
                Back to Employee List
              </Button>
            </Link>
          </Form>
        </div>
        {showAlert && (
          <div className="px-5 m-5">
            <div className="alert alert-success" role="alert">
              Well done! created an Employee details
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Add;
