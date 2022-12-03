import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="row">
      <Sidebar />
      <div className="col-sm-12">
        <div className="container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

