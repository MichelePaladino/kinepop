import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer"
import HomePage from "./components/HomePage"

import "./styles/styles.css"

class App extends Component {


  render() {
    return (
      <Router>
          <div>
            <Header />
            <SideDrawer />
            <Switch>
              <Route path="/" render={() => <div>Landing Page</div>} exact/>
              <Route path="/movies/:mode" component={HomePage}/>
            </Switch>
          </div>
      </Router>
    )
  }
} 


export default App;


