import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import uuid from "uuid";

import MovieCard from "./MovieCard";
import { startSetMovies, startAddMovies } from "../store/actions/moviePageActions";

const API_KEY=`${process.env.REACT_APP_TMDB_API_KEY}`;

class MoviePage extends Component {
    componentDidMount() {
        let mode = this.props.match.params.mode;
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        if (!this.props[mode].loaded) axios.get(`https://api.themoviedb.org/3/movie/${mode}?api_key=${API_KEY}&region=US`)
        .then(response => {
            this.props.startSetMovies(response.data.results, mode);
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        e.stopPropagation();

        let mode = this.props.match.params.mode;
        let scrollTop = window.pageYOffset;
        let clientHeight = window.innerHeight;
        let scrollHeight = document.body.scrollHeight;

        if (clientHeight + scrollTop === scrollHeight) {
            axios.get(`https://api.themoviedb.org/3/movie/${mode}?api_key=${API_KEY}&region=US&page=${this.props[mode].page+1}`)
            .then(response => this.props.startAddMovies(response.data.results, mode));
        }    
    }

    render () {
        let mode = this.props.match.params.mode;
        return (this.props[mode].loaded &&
            <div className="Search">
                <div className='movieCardList'>
                    {this.props[mode].movies.length > 0 && this.props[mode].movies.map(movie => <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>)}
                </div>
            </div>
        )
    }

} 

const mapStateToProps = (state, ownProps) => {
    let mode = ownProps.match.params.mode;
    return { [mode]: state[mode] }
}

const mapDispatchToProps = (dispatch) => ({
    startSetMovies: (movies, mode) => dispatch(startSetMovies(movies, mode)),
    startAddMovies: (movies, mode) => dispatch(startAddMovies(movies, mode)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);