import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import MovieCard from "./movieCard";
import { startSetLatestMovies } from "../store/actions/moviesActions";

// const movies = [
//     {
//         title: "Ghost",
//         year: "1990",
//         poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rtxy3cplRFPUvruZajpcoxOQ7bi.jpg"
//     },
//     {
//         title: "Back to the Future",
//         year: "1985",
//         poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg"
//     },
//     {
//         title: "Titanic",
//         year: "1997",
//         poster: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kHXEpyfl6zqn8a6YuozZUujufXf.jpg"
//     },
// ];


export class MovieCardList extends Component {
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
            .then(response => this.props.startSetLatestMovies(response.data.results))
    }

    render () {
        return (
            this.props.movies.map((movie, index) => (
                <MovieCard title={movie.title} year={movie.release_date} poster={movie.poster_path} key={movie.id} id={movie.id}/>
            ))
        )
    }
}

// const MovieCardList = (props) => (
//     props.movies.map((movie, index) => (
//         movie.title.toLowerCase() === props.filters.title.toLowerCase() ? <MovieCard title={movie.title} year={movie.year} poster={movie.poster} key={index} /> : null
//     ))
// );


const mapStateToProps = (state) => ({
    movies: state.movies,
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies))
})

// const MovieCardList = (props) => (
//     props.movies.map((movie, index) => (
//         <MovieCard title={movie.title} year={movie.year} poster={movie.poster} key={index} />
//     ))
// );

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardList);