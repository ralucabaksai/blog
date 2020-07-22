import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Hompage";
import Blogpage from "./Components/Blogpage/Blogpage";
function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/blogpage' component={Blogpage} />
    </Switch>
  );
}
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
