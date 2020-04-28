import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom"

import Lagou from "./pages/Lagou"
function App() {
  return (
    <div className="App">
    <Router>
      <nav>
        <NavLink to={"/"} exact>拉勾</NavLink>|
        <NavLink to={"/login"}>登陆</NavLink>|
        <NavLink to={"/loginLog"}>查看登陆记录</NavLink>
      </nav>
      <Route path={"/"} exact component={Lagou}></Route>
    </Router>
    </div>
  );
}

export default App;
