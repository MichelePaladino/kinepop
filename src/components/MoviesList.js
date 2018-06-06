import React, { Component } from "react";
import { connect } from "react-redux";

import uuid from "uuid";

import { Icon } from 'rmwc/Icon';
import { Select } from "rmwc/Select";
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import { Switch } from 'rmwc/Switch';
import { Radio } from 'rmwc/Radio';
import { Checkbox } from 'rmwc/Checkbox';
import { Button, ButtonIcon } from 'rmwc/Button';
import { TabBar, Tab, TabIcon, TabIconText } from 'rmwc/Tabs';

import MovieCard from "./movieCard";
import { startOnChangeSortBy, onChangeStartDate, onChangeEndDate, onChangePrimaryReleaseDate, resetDates, setRating, toggleGenre, startPopulateMovies, resetDiscover, incrementPage, onChangeTab, onChangeSwitch, onChangeGenre } from "../store/actions/discoverActions";

class MoviesList extends Component {
  componentDidMount () {
    console.log("moviesList.js didMount!");
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    if (this.props.moviesList.movies.length === 0) {
      this.props.requestMovies(this.props.moviesList.page);
    }
  }
  componentDidUpdate() {
    console.log("moviesList.js didUpdate!");
    // new props? (specifically, the movieList!) --> render again! with movies!  return (movieListWithMovies && <movieCardList ...>)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

//   requestMovies = (page) => {
//   const sort = this.props.discover.sortBy ? `&sort_by=${this.props.discover.sortBy}` : '';
//   const year = this.props.discover.primaryReleaseDate ? `&primary_release_year=${this.props.discover.primaryReleaseDate}` : '';
//   const startDate = this.props.discover.startDate ? `&primary_release_date.gte=${this.props.discover.startDate}` : '';
//   const endDate = this.props.discover.endDate ? `&primary_release_date.lte=${this.props.discover.endDate}` : '';
//   const genres = this.props.discover.genres.length > 0 ? `&with_genres=${this.props.discover.genres.join(',')}` : '';
//   // NOT A GOOD UX RIGHT NOW ---> const rating = this.props.discover.rating && this.props.discover.rating >= 6 ? `&vote_average.gte=${this.props.discover.rating}&vote_count.gte=999` :
//   //   this.props.discover.rating && this.props.discover.rating <= 5.9 ? `&vote_average.lte=${this.props.discover.rating}` :
//   //  '';

//     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8${sort}${year}${startDate}${endDate}${genres}&page=${page}`)
//       .then(response => this.props.startPopulateMovies(response.data.results));
// // https://api.themoviedb.org/3/discover/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&sort_by=popularity.desc&primary_release_year=1990
//   }

  handleScroll = (e) => {
    e.stopPropagation();

    let scrollTop = window.document.documentElement.scrollTop;
    let clientHeight = window.document.documentElement.clientHeight;
    let scrollHeight = window.document.documentElement.scrollHeight;

    if (clientHeight + scrollTop === scrollHeight) {
        this.props.requestMovies(this.props.moviesList.page + 1);
        this.props.incrementPageMoviesList()
    }
}

  render() {
    return (
      <div className='movieCardList'>
        {this.props.moviesList.movies.length > 0 && this.props.moviesList.movies.map(movie => <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // movies: state.movies,
  // filters: state.filters,
  // ui: state.ui,
  // movieInfo: state.movieInfo,
  // peopleInfo: state.peopleInfo,

//   discover: state.discover

    moviesList: state.moviesList
});

// const mapDispatchToProps = dispatch => ({
//   startOnChangeSortBy: (e) => dispatch(startOnChangeSortBy(e)),
//   onChangeStartDate: (e) => dispatch(onChangeStartDate(e.target.value)),
//   onChangeEndDate: (e) => dispatch(onChangeEndDate(e.target.value)),
//   onChangePrimaryReleaseDate: (e) => dispatch(onChangePrimaryReleaseDate(e.target.value)),
//   resetDates: () => dispatch(resetDates()),
//   setRating: (e) => dispatch(setRating(e.target.value)),
//   toggleGenre: (genre) => dispatch(toggleGenre(genre)),
//   startPopulateMovies: (movies) => dispatch(startPopulateMovies(movies)),
//   resetDiscover: () => dispatch(resetDiscover()),
//   incrementPage: () => dispatch(incrementPage()),
//   onChangeTab: (e) => dispatch(onChangeTab(e.target.value)),
//   onChangeSwitch: (checked) => dispatch(onChangeSwitch(checked)),
//   onChangeGenre: (genre, toggle) => dispatch(onChangeGenre(genre, toggle)),
// });

export default connect(mapStateToProps)(MoviesList);
