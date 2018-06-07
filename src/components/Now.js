import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import uuid from "uuid";

import { TextField } from 'rmwc/TextField';

import MovieCard from "./movieCard";
import { startAddNowMovies, startPopulateNow } from "../store/actions/nowActions";


class Now extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
        .then(response => {
            this.props.startPopulateNow(response.data.results);
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        e.stopPropagation();

        let scrollTop = window.document.documentElement.scrollTop;
        let clientHeight = window.document.documentElement.clientHeight;
        let scrollHeight = window.document.documentElement.scrollHeight;

        if (clientHeight + scrollTop === scrollHeight) {
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&page=${this.props.now.page+1}`)
            .then(response => this.props.startAddNowMovies(response.data.results));
        }    
    }

    render () {
        return (this.props.now.loaded &&
            <div className="Search">
                <div className='movieCardList'>
                    {this.props.now.movies.length > 0 && this.props.now.movies.map(movie => <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>)}
                </div>
                {/* INIZIARE QUI! 
                -----Implementare MOVIESLIST anche qui, passando un nuovo REQUESTMOVIES da costruire QUI, 
                e passando anche qualcosa per far sì che this.props.moviesList.movies.length sia dinamico e quindi in questo caso sia this.prop.search.movies!----
                <MoviesList requestMovies={this.requestMovies} incrementPageMoviesList={this.props.incrementPageMoviesList}/> */}
            </div>
        )
    }

} 

const mapStateToProps = (state) => ({
    now: state.now
})

const mapDispatchToProps = (dispatch) => ({
    startPopulateNow: (movies) => dispatch(startPopulateNow(movies)),
    startAddNowMovies: (movies) => dispatch(startAddNowMovies(movies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Now);