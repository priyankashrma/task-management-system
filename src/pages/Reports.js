import React, { useState, useContext, useEffect } from "react";
import {
  Table,
  InputGroup,
  Button,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { TaskContext } from "../context/TaskContext";

const Reports = () => {
  const { tasks } = useContext(TaskContext);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [statusFilter, setStatusFilter] = useState(false);
  const [taskTypeFilter, setTaskTypeFilter] = useState("");

  useEffect(() => {
    setFilteredTasks(
      [...filteredTasks].sort(
        (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
      )
    );
  }, []);
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
                <Form.Control
                  aria-describedby="title"
                  onKeyUp={(e) => {
                    if (e.target.value) {
                      setFilteredTasks(() => {
                        if (filteredTasks.length) {
                          return filteredTasks.filter((task) =>
                            task.title.startsWith(e.target.value)
                          );
                        } else
                          return tasks.filter((task) =>
                            task.title.startsWith(e.target.value)
                          );
                      });
                    } else {
                      setFilteredTasks(tasks);
                    }
                  }}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setFilteredTasks(
                      [...filteredTasks].sort((a, b) => {
                        if (a.title > b.title) {
                          return 1;
                        } else if (b.title > a.title) {
                          return -1;
                        }
                        return 0;
                      })
                    );
                  }}
                >
                  <i className="bi bi-caret-up-fill"></i>
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setFilteredTasks(
                      [...filteredTasks].sort((a, b) => {
                        if (a.title < b.title) {
                          return 1;
                        } else if (b.title < a.title) {
                          return -1;
                        }
                        return 0;
                      })
                    );
                  }}
                >
                  <i className="bi bi-caret-down-fill"></i>
                </Button>
              </InputGroup>
            </th>
            <th>
              <InputGroup className="mb-3">
                <InputGroup.Text>Date</InputGroup.Text>
                <Form.Control
                  type="date"
                  aria-describedby="due-date"
                  onChange={(e) => {
                    console.log(e.target.value);
                    if (filteredTasks.length) {
                      setFilteredTasks(
                        filteredTasks.filter(
                          (task) => task.dueDate === e.target.value
                        )
                      );
                    } else {
                      setFilteredTasks(
                        tasks.filter((task) => task.dueDate === e.target.value)
                      );
                    }
                  }}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    tasks.sort(function (a, b) {
                      return new Date(b.dueDate) - new Date(a.dueDate);
                    })
                  }
                >
                  <i className="bi bi-caret-up-fill"></i>
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    tasks.sort(function (a, b) {
                      return new Date(a.dueDate) - new Date(b.dueDate);
                    })
                  }
                >
                  <i className="bi bi-caret-down-fill"></i>
                </Button>
              </InputGroup>
            </th>
            <th>
              <InputGroup className="mb-3">
                <InputGroup.Text>Status Filter</InputGroup.Text>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) => (
                    <Tooltip id="button-tooltip" {...props}>
                      Filter Incomplete tasks
                    </Tooltip>
                  )}
                >
                  <Form.Switch
                    className="m-2"
                    aria-describedby="status"
                    checked={statusFilter}
                    onChange={(e) => {
                      setStatusFilter((statusFilter) => !statusFilter);
                      console.log(statusFilter);
                      if (statusFilter === true) {
                        setFilteredTasks(tasks);
                      }
                    }}
                  />
                </OverlayTrigger>
                {statusFilter ? (
                  <div>
                    {" "}
                    <Form.Group controlId="typeOfTask">
                      <Form.Check
                        value="completed"
                        type="radio"
                        aria-label="radio 1"
                        label="Completed"
                        onChange={() => {
                          setTaskTypeFilter("completed");
                          setFilteredTasks(
                            [...tasks].filter((a) => a.status === true)
                          );
                        }}
                        checked={taskTypeFilter === "completed"}
                      />
                      <Form.Check
                        value="pending"
                        type="radio"
                        aria-label="radio 2"
                        label="Pending"
                        onChange={() => {
                          setTaskTypeFilter("pending");
                          setFilteredTasks(
                            [...tasks].filter((a) => a.status === false)
                          );
                        }}
                        checked={taskTypeFilter === "pending"}
                      />
                    </Form.Group>
                  </div>
                ) : (
                  <div>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={(props) => (
                        <Tooltip id="button-tooltip" {...props}>
                          Completed First
                        </Tooltip>
                      )}
                    >
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          setFilteredTasks(
                            [...filteredTasks].sort((a, b) => {
                              if (b.status > a.status) {
                                return 1;
                              } else if (a.status > b.status) {
                                return -1;
                              } else {
                                return 0;
                              }
                            })
                          )
                        }
                      >
                        <i className="bi bi-caret-up-fill"></i>
                      </Button>
                    </OverlayTrigger>
                    &nbsp;
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={(props) => (
                        <Tooltip id="button-tooltip" {...props}>
                          Incomplete First
                        </Tooltip>
                      )}
                    >
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          setFilteredTasks(
                            [...filteredTasks].sort((a, b) => {
                              if (a.status > b.status) {
                                return 1;
                              } else if (b.status > a.status) {
                                return -1;
                              } else {
                                return 0;
                              }
                            })
                          )
                        }
                      >
                        <i className="bi bi-caret-down-fill"></i>
                      </Button>
                    </OverlayTrigger>
                  </div>
                )}
              </InputGroup>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={task.title + task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.dueDate}</td>
              <td>{task.status ? "Completed" : "Not Completed"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Reports;

