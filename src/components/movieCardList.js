import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import uuid from "uuid";

import MovieCard from "./movieCard";

import { startSetLatestMovies } from "../store/actions/moviesActions";
import { startSetSearchMovie } from "../store/actions/moviesActions"

export class MovieCardList extends Component {
    componentDidMount() {
        console.log("from movieCardList.js: componentDidMount");
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
            .then(response => this.props.startSetLatestMovies(response.data.results))
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.filters.title !== nextProps.filters.title || this.props.movies.listMovies !== nextProps.movies.listMovies
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("from movieCardList.js: componentDidUpdate");
        prevProps.filters.title !== this.props.filters.title && this.props.filters.title !== "" &&
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.filters.title}`)
            .then(response => this.props.setSearchMovie(response.data.results))
    }

    render () {
        return (
            this.props.movies.listMovies.map((movie, index) => {
                !movie.poster_path ? movie.poster_path="4Ll653TYNjXaKlYGmiPRr236Vhi.jpg" : movie.poster_path=movie.poster_path;
                return <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>
            })
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
    setSearchMovie: (movies) => dispatch(startSetSearchMovie(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);