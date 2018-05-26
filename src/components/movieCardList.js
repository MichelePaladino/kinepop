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

    handleFavClick = (e) => {
        console.log("movieCardList: handleFavClick AGGIUNGO/TOLGO dal DB", "eventDetail:", e.detail)
    }



    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("ShouldComponentUpdate?");
    //     if (this.props.movies.latestMovies === false) {
    //         console.log("primo if");
    //         return this.props.filters.title !== nextProps.filters.title
    //     }
    //     if (this.props.movies.latestMovies === true && nextProps.movies.infiniteScrollPage !== 1) {
    //         console.log("secondo if")
    //         console.log("this.props.movies.listMovies.slice(-20):", this.props.movies.listMovies.slice(-20));
    //         console.log("nextProps.movies.listMovies:", nextProps.movies.listMovies.slice(-20));
    //         let primo = this.props.movies.listMovies.slice(-20)[19].id; 
    //         let secondo = nextProps.movies.listMovies.slice(-20)[19].id;
    //         console.log("primo", primo, "secondo", secondo)
    //         return primo !== secondo;
    //     }
    //     else {
    //         return true;
    //     }
    // }

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
    setSearchMovie: (movies) => dispatch(startSetSearchMovie(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);