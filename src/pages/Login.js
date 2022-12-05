import ls from "local-storage";
import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { TaskContext } from "../context/TaskContext";

const Login = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const { setTasks } = useContext(TaskContext);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [disabledLogin, setDisabledLogin] = useState(false);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const users = JSON.parse(ls.get("usersTaskHuman")) || [];

  const login = (e) => {
    e.preventDefault();
    if (users.length) {
      const filteredUsers = users.filter(
        (user) => user.email === formState.email
      );

      if (filteredUsers.length) {
        const filteredUser = filteredUsers[0];

        if (formState.password === filteredUser.password) {
          setDisabledLogin(true);

          setMessage("Logged In Successfully");
          setLoggedInUser(formState.email);
          ls("loggedInUser", formState.email);
          setTasks(filteredUser.tasks);
          setTimeout(() => {
            navigate("/tasks");
          }, 500);
        } else {
          setFormState({ email: formState.email, password: "" });

          setError("Password does not match");
        }
      } else {
        createUser();
      }
    } else {
      createUser();
    }
  };

  const createUser = () => {
    const newUser = {
      user_id: users.length + 1,
      email: formState.email,
      password: formState.password,
      tasks: [],
    };
    users.push(newUser);
    ls("usersTaskHuman", JSON.stringify(users));
    setDisabledLogin(true);
    setMessage("User Created Successfully");
    setLoggedInUser(formState.email);
    ls("loggedInUser", formState.email);
    setTimeout(() => {
      navigate("/tasks");
    }, 500);
  };

  return (
    <Container className=" d-flex flex-row justify-content-center">
      <div className="login-container">
        <Form className="mx-auto" onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              aria-label="email"
              type="email"
              placeholder="Enter email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              aria-label="password"
              type="password"
              placeholder="Password"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="primary">{message}</Alert>}
          <Button variant="primary" type="submit" disabled={disabledLogin}>
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;

