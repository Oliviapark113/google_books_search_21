import React  from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Search from './pages/search'
import Saved from './pages/saved'
import Nav from './components/nav'


function App() {
  

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
