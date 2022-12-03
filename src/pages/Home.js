import React from "react";
import Tasks from "../components/Tasks";
import AddNewTask from "../components/AddNewTask";

const Home = () => {
  return (
    <div className="row">
      <div className="col-sm-12 mt-3">
        <Tasks />
      </div>
      <div className="col-sm-8">
        <AddNewTask />
      </div>
    </div>
  );
};

export default Home;

