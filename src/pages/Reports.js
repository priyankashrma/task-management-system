import React from "react";
import { Table, InputGroup, Button, Form } from "react-bootstrap";

const Reports = () => {
  return (
    <div className="row">
      <h4 className="my-3 text-center">Business Reports</h4>

      <Table striped bordered hover className="ml-2 mr-2">
        <thead>
          <tr>
            <th>
              <InputGroup className="mb-3">
                <InputGroup.Text>S No.</InputGroup.Text>
              </InputGroup>
            </th>
            <th>
              <InputGroup className="mb-3">
                <InputGroup.Text>Title</InputGroup.Text>
                <Form.Control aria-describedby="title" />
                <Button variant="outline-secondary">
                  <i className="bi bi-caret-up-fill"></i>
                </Button>
                <Button variant="outline-secondary">
                  <i className="bi bi-caret-down-fill"></i>
                </Button>
              </InputGroup>
            </th>
            <th>
              <InputGroup className="mb-3">
                <InputGroup.Text>Date</InputGroup.Text>
                <Form.Control type="date" aria-describedby="due-date" />
                <Button variant="outline-secondary">
                  <i className="bi bi-caret-up-fill"></i>
                </Button>
                <Button variant="outline-secondary">
                  <i className="bi bi-caret-down-fill"></i>
                </Button>
              </InputGroup>
            </th>
            <th>
              <InputGroup className="mb-3">
                <InputGroup.Text>Status</InputGroup.Text>
                <Form.Switch className="m-2" aria-describedby="status" />
                <Button variant="outline-secondary">
                  <i className="bi bi-caret-up-fill"></i>
                </Button>
                <Button variant="outline-secondary">
                  <i className="bi bi-caret-down-fill"></i>
                </Button>
              </InputGroup>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Do Laundry</td>
            <td>2.12.2022</td>
            <td>completed</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Do Laundry</td>
            <td>2.12.2022</td>
            <td>not completed</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Do Laundry</td>
            <td>2.12.2022</td>
            <td>completed</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Reports;

