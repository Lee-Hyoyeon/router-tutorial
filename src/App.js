import "./App.css";
import Home from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Profile from "./Profile";

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">소개 </Link>
        </li>
        <li>
          <Link to="/pf/hyoyeon">hyoyeon 프로필</Link>
        </li>
        <li>
          <Link to="/pf/lili">lili 프로필</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pf/:user" element={<Profile />}></Route>
      </Routes>
    </>
  );
};

export default App;
