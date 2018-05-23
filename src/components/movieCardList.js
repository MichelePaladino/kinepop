import React from "react";
import { connect } from "react-redux";

import MovieCard from "./movieCard";

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


const mapStateToProps = (state) => ({
    movies: state.movies
});

const MovieCardList = (props) => (
    props.movies.map((movie, index) => (
        <MovieCard title={movie.title} year={movie.year} poster={movie.poster} key={index} />
    ))
);

export default connect(mapStateToProps)(MovieCardList);