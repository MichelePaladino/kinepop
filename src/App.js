import React, { Component } from "react";

import { Button } from "rmwc/Button";

import MovieCardList from "./components/movieCardList";
import MovieSearch from "./components/movieSearch"

import "./styles/styles.css"

const App = props => (
  <div>
    <MovieSearch />
    <div className="movieCardList">
      <MovieCardList />
    </div>
  </div>
);

export default App;
