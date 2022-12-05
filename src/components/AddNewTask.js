import ls from "local-storage";
import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TaskContext } from "../context/TaskContext";

const AddNewTask = ({ tasks, setTasks }) => {
  const today = new Date().toISOString().split("T")[0];

  const { addTask } = useContext(TaskContext);

  const [formState, setFormState] = useState({
    title: "",
    dueDate: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    addTask(formState.title, formState.dueDate);
    ls("tasks", tasks);
    setFormState({ title: "", dueDate: today });
  };

  return (
    <div className="new-task">
      <Form onSubmit={onFormSubmit}>
        <Form.Label className="mb-1">Title</Form.Label>
        <Form.Control
          required
          minLength={50}
          maxLength={100}
          aria-label="Title"
          name="name"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
        />

        <Form.Label className="mb-1 mt-3">Due Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          onChange={(e) =>
            setFormState({ ...formState, dueDate: e.target.value })
          }
        />

        <Button type="submit" variant="primary" className="mt-3">
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default AddNewTask;

