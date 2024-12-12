import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Page from "./components/Page";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <footer className="footer">
        <p>Powered by stepback by Pulse</p>
      </footer>
    </div>
  );
}

export default App;
