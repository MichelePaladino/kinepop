import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import MovieInfo from "./components/MovieInfo";
import PeopleInfo from "./components/PeopleInfo";
import Discover from "./components/Discover";
import Search from "./components/Search"; 
import MoviePage from "./components/MoviePage";

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
              <Route path="/movies/discover" component={Discover}/>
              <Route path="/movies/search" component={Search}/>
              <Route path="/movies/:mode" render={props => <MoviePage key={Date.now()} {...props} />}/>
              <Route path="/people/:id" render={props => <PeopleInfo key={Date.now()} {...props} />}/>
            </Switch>
          </div>
      </Router>
    )
  }
} 

export default App;


