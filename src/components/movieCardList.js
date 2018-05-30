import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import uuid from "uuid";

import MovieCard from "./movieCard";

import { startSetLatestMovies, resetPage, startSetSearchMovie, startSetPopularMovies } from "../store/actions/moviesActions";
import { resetTitleFilter } from "../store/actions/filtersActions"

export class MovieCardList extends Component {
    componentDidMount() {
        this.props.resetPage();
        this.props.resetTitleFilter();
        console.log("from movieCardList.js: componentDidMount");
        // THIS REQUEST MUST DEPEND FROM THE "path='/..." OF ROUTE WHICH CONTAINS HomePage.js"
        // IF PATH === latest THEN
        if (this.props.mode === 'latest') {
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
            .then(response => this.props.startSetLatestMovies(response.data.results))
        }
        else if (this.props.mode === 'popular') {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
            .then(response => this.props.startSetPopularMovies(response.data.results))
        }

        // IF PATH === 2016 THEN
            //axiox.get('2016).then(dispatch(startSet2016Movies))

        // passed here as this.props.path  (can be: latest, 2016, 2015...)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.filters.title !== nextProps.filters.title && this.props.movies.moviesList !== nextProps.movies.moviesList;
    // }

    handleFavClick = (e) => {
        console.log("movieCardList: handleFavClick AGGIUNGO/TOLGO dal DB", "eventDetail:", e.detail)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("from movieCardList.js: componentDidUpdate");
        if (prevProps.filters.title !== this.props.filters.title && this.props.filters.title !== "") {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.filters.title}`)
            .then(response => this.props.startSetSearchMovie(response.data.results))
        }       
        // NEW THIS.PROPS.MODE (---> new request)
    }

    render () {
        return (
            this.props.movies.moviesList.map((movie, index) => {
                !movie.poster_path ? movie.poster_path="4Ll653TYNjXaKlYGmiPRr236Vhi.jpg" : movie.poster_path=movie.poster_path;
                // movie.id is in database THEN inDataBase=true ELSE false
                let check = movie.id ? true : false; 
                return <MovieCard onFavClick={this.handleFavClick} inDatabase={check} title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>
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
    startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
    startSetPopularMovies: (movies) => dispatch(startSetPopularMovies(movies)),
    resetPage: () => dispatch(resetPage()),
    resetTitleFilter: () => dispatch(resetTitleFilter())
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);