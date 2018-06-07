import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import uuid from "uuid";

import { TextField } from 'rmwc/TextField';

import MovieCard from "./movieCard";
import { startAddSearchMovies, startPopulateSearch, incrementPageSearchMovies, onTitleChange } from "../store/actions/searchActions";


class Search extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.search.title !== this.props.search.title && this.props.search.title !== "") {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.search.title}`)
            .then(response => this.props.startPopulateSearch(response.data.results));
            // this.props.resetPage(); ;
        } 
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
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.search.title}&page=${this.props.search.page+1}`)
            .then(response => this.props.startAddSearchMovies(response.data.results));
        }    
    }

    render () {
        return (
            <div className="Search">
                <TextField fullwidth placeholder="Search for a movie!" value={this.props.search.title} onChange={this.props.onTitleChange}/>
                <div className='movieCardList'>
                    {this.props.search.movies.length > 0 && this.props.search.movies.map(movie => <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>)}
                </div>
            </div>
        )
    }

} 

const mapStateToProps = (state) => ({
    search: state.search
})

const mapDispatchToProps = (dispatch) => ({
    onTitleChange: (e) => dispatch(onTitleChange(e)),
    startPopulateSearch: (movies) => dispatch(startPopulateSearch(movies)),
    incrementPageSearchMovies: () => dispatch(incrementPageSearchMovies()),
    startAddSearchMovies: (movies) => dispatch(startAddSearchMovies(movies)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);