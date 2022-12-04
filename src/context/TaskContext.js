import React, { createContext, useState } from "react";
import ls from "local-storage";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const data = JSON.parse(ls.get("usersTaskHuman"));
  const loggedInUser = ls.get("loggedInUser");

  const userTasks =
    loggedInUser && data.filter((item) => item.email === loggedInUser)[0].tasks;

  const [tasks, setTasks] = useState(userTasks);

  const addTask = (title, dueDate) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      dueDate,
      status: false,
    };

    setTasks([...tasks, newTask]);

    const newData = data.map((person) => {
      if (person.email === loggedInUser) {
        return { ...person, tasks: [...tasks, newTask] };
      } else {
        return person;
      }
    });

    ls("usersTaskHuman", JSON.stringify(newData));
  };

  const updateStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: !task.status };
        } else {
          return task;
        }
      })
    );
    const newData = data.map((person) => {
      if (person.email === loggedInUser) {
        return {
          ...person,
          tasks: tasks.map((task) => {
            if (task.id === id) {
              return { ...task, status: !task.status };
            } else {
              return task;
            }
          }),
        };
      } else {
        return person;
      }
    });

    ls("usersTaskHuman", JSON.stringify(newData));
  };
  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, updateStatus }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;

