import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddNewTask = () => {
  return (
    <div className="new-task">
      <Form.Label className="mb-1">Title</Form.Label>
      <Form.Control aria-label="First name" />

      <Form.Label className="mb-1 mt-3">Due Date</Form.Label>
      <Form.Control type="date" />

      <Button variant="primary" className="mt-3">
        Add New Task
      </Button>
    </div>
  );
};

export default AddNewTask;

