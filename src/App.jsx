import './App.css'
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Counter from "./components/Counter.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/Form.jsx";
import ListFilter from "./components/ListFilter.jsx";
import Quotes from "./components/Quotes.jsx";
import ApiUsers from "./components/ApiUsers.jsx";

function App() {

  return (
    <>
      <Router>
        <nav>
          <Link to={"/"} className="homeLink">Home</Link>
          <Link to={"/counter"}>Counter</Link>
          <Link to={"/form"}>Form</Link>
          <Link to={"/list-filter"}>List Filter</Link>
          <Link to={"/quotes"}>Quotes</Link>
          <Link to={"api-users"}>Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list-filter" element={<ListFilter />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="api-users" element={<ApiUsers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
