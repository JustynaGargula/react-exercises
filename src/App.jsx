import './App.css'
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Counter from "./components/counter.jsx";
import Home from "./components/Home.jsx";

function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/counter"}>Counter</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
