import React, { Component } from "react";
import { connect } from "react-redux";

import uuid from "uuid";

import MovieCard from "./MovieCard";

class MoviesList extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    if (this.props.moviesList.movies.length === 0) {
      this.props.requestMovies(this.props.moviesList.page);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

  handleScroll = (e) => {
    e.stopPropagation();

    let scrollTop = window.pageYOffset;
    let clientHeight = window.innerHeight;
    let scrollHeight = document.body.scrollHeight;

    if (clientHeight + scrollTop === scrollHeight) {
        this.props.requestMovies(this.props.moviesList.page + 1);
        this.props.incrementPageMoviesList()
    }
}

  render() {
    return (
      <div className='MoviesList'>
        <div className='movieCardList'>
          {this.props.moviesList.movies.length > 0 && this.props.moviesList.movies.map(movie => <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    moviesList: state.moviesList
});

export default connect(mapStateToProps)(MoviesList);
