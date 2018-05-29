import React, { Component } from "react";
import axios from "axios";

import { Grid, GridCell } from "rmwc/Grid";

class MovieInfo extends Component {
  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/videos?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
        .then(response => console.log("componentDidMount() ---> response to use to update state dispatching:", response))
  }
  render() {
    return (
      <div className="MovieInfo">
        <Grid className="Grid">
          <GridCell span="3">1</GridCell>
          <GridCell span="3">2</GridCell>
          <GridCell span="3">3</GridCell>
          <GridCell span="3">3+</GridCell>
        </Grid>
        <Grid className="Grid">
          <GridCell span="4">4</GridCell>
          <GridCell span="4">5</GridCell>
          <GridCell span="4">6</GridCell>
        </Grid>
        <Grid className="Grid">
          <GridCell span="12">12span</GridCell>
        </Grid>
      </div>
    );
  }
}

export default MovieInfo;

// {this.props.match.params.id}
