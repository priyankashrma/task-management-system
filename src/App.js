import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ls from "local-storage";

import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import TaskContextProvider from "./context/TaskContext";

function App() {
  const loggedInUser = ls.get("loggedInUser");
  return (
    <div className="row">
      <Sidebar />

      <TaskContextProvider>
        <div className="col-sm-12">
          <div className="container">
            <Router>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={loggedInUser ? <Home /> : <Login />}
                />
                <Route
                  path="/tasks"
                  element={loggedInUser ? <Home /> : <Login />}
                />
                <Route
                  path="/reports"
                  element={loggedInUser ? <Reports /> : <Login />}
                />
              </Routes>
            </Router>
          </div>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;

