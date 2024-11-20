import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/:page" element={<Page />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
