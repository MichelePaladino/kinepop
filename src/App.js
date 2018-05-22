import React, { Component } from "react";
import MovieCard from "./components/movieCard";

import { Button } from "rmwc/Button";

import "./styles/styles.css"


const App = props => (
  <div className="movieCardList">
  <MovieCard /> <MovieCard /> <MovieCard /> <MovieCard />
  </div>
);

export default App;
