import React, { useContext } from "react";
import { Table, Form, Alert } from "react-bootstrap";
import { TaskContext } from "../context/TaskContext";

const Tasks = () => {
  const { tasks, updateStatus } = useContext(TaskContext);
  return (
    <div className="tasks overflow-scroll">
      {tasks.length ? (
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
            {tasks.map((task) => (
              <tr key={task.title + task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.dueDate}</td>
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={task.status}
                    onChange={() => updateStatus(task.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert type="primary">No Tasks yet.</Alert>
      )}
    </div>
  );
};

export default Tasks;

