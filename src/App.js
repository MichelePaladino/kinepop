import React, { Component } from "react";

import MovieCardList from "./components/movieCardList";
import MovieSearch from "./components/movieSearch"

import "./styles/styles.css"

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    console.log("documentElement.scrollHeight", window.document.documentElement.scrollHeight);
    console.log("documentElement.scrollTop", window.document.documentElement.scrollTop);
    console.log("documentElement.clientHeight", window.document.documentElement.clientHeight);
  }

  render() {
    return (
      <div >
        <MovieSearch />
        <div className="movieCardList">
          <MovieCardList onScroll={() => this.handleScroll()}/>
        </div>
      </div>
    )
  }
} 

export default App;
