import './App.css'
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Counter from "./components/Counter.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";

function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to={"/"} className="homeLink">Home</Link>
          <Link to={"/counter"}>Counter</Link>
          <Link to={"/form"}>Form</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
