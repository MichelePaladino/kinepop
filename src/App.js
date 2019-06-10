import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncHeader = asyncComponent(() => import("./components/Header"));
const AsyncSideDrawer = asyncComponent(() => import("./components/SideDrawer"));
const AsyncMovieInfo = asyncComponent(() => import("./components/MovieInfo"));
const AsyncPeopleInfo = asyncComponent(() => import("./components/PeopleInfo"));
const AsyncDiscover = asyncComponent(() => import("./components/Discover"));
const AsyncSearch = asyncComponent(() => import("./components/Search"));
const AsyncMoviePage = asyncComponent(() => import("./components/MoviePage"));
const AsyncLandingPage = asyncComponent(() => import("./components/LandingPage"));


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <div className="header">
              <AsyncHeader />
            </div>
            <AsyncSideDrawer />
            <Switch>
              <Route path="/" component={AsyncLandingPage} exact/>
              <Route path="/movies/movie/:id" component={AsyncMovieInfo}/>
              <Route path="/movies/discover" component={AsyncDiscover}/>
              <Route path="/movies/search" component={AsyncSearch}/>
              <Route path="/movies/:mode" render={props => <AsyncMoviePage key={Date.now()} {...props} />}/>
              <Route path="/people/:id" render={props => <AsyncPeopleInfo key={Date.now()} {...props} />}/>
            </Switch>
          </div>
      </Router>
    )
  }
} 

export default App;


