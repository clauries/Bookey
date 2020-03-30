import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search.js';
import Saved from './pages/Saved.js';
import NoMatch from './pages/NoMatch.js';
import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Search />
          </Route>

          <Route exact path={"/search"}>
            <Search />
          </Route>

          <Route exact path="/saved">
            <Saved />
          </Route>

          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
