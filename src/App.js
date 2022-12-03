import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";

import logo from './logo.svg';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="row">
      <Sidebar />
      <div className="col-sm-12">
        <div className="container">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        </div>
      </div>
    </div>
  );
}

export default App;

