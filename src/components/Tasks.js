import React from "react";
import { Table, Form } from "react-bootstrap";

const Tasks = () => {
  return (
    <div className="tasks">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Do Laundry</td>
            <td>2.12.2022</td>
            <td>
              <Form.Check type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Do Laundry</td>
            <td>2.12.2022</td>
            <td>
              <Form.Check type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Do Laundry</td>
            <td>2.12.2022</td>
            <td>
              <Form.Check type="checkbox" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tasks;

