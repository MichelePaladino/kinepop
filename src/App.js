import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer"
import HomePage from "./components/HomePage"
import MovieInfo from "./components/MovieInfo"

import "./styles/styles.css"

class App extends Component {

  render() {
    return (
      <Router>
          <div>
            <div className="header">
              <Header />
            </div>
            <SideDrawer />
            <Switch>
              <Route path="/" render={() => <div>Landing Page</div>} exact/>
              <Route path="/movies/movie/:id" component={MovieInfo}/>
              <Route path="/movies/:mode" render={props => <HomePage key={Date.now()} {...props} />}/>
            </Switch>
          </div>
      </Router>
    )
  }
} 


export default App;

