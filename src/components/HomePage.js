import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import MovieCardList from "./movieCardList";
import MovieSearch from "./movieSearch"

import { startSetLatestMovies } from "../store/actions/moviesActions";
import { startSetSearchMovie } from "../store/actions/moviesActions";
import { resetPage } from "../store/actions/moviesActions" ;
import { startSearchMoreMovie } from "../store/actions/moviesActions" ;

import "../styles/styles.css"

class HomePage extends Component {
    componentDidMount() {
        console.log("from HomePage.js: componentDidMount");
        window.addEventListener('scroll', this.handleScroll, { passive: true });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("from HomePage.js: componentDidUpdate");
        if (prevProps.movies.latestMovies !== this.props.movies.latestMovies) {
            this.props.resetPage()
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = (e) => {
        e.stopPropagation();

        // const pageHeight = window.document.documentElement.scrollHeight;
        // const userHeight = window.document.documentElement.scrollTop;
        // console.log("p:", pageHeight, "u:", userHeight);
        // console.log(window)

        const scrollTop = window.document.documentElement.scrollTop;
        const clientHeight = window.document.documentElement.clientHeight;

        const scrollHeight = window.document.documentElement.scrollHeight;

        let page = this.props.movies.infiniteScrollPage;

        //  userHeight >= (pageHeight * 0.8) ? 
        clientHeight + scrollTop >= scrollHeight * 0.8 ?
            (
                this.props.movies.latestMovies === true ? 
                    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&page=${page+1}`)
                        .then(response => this.props.startSetLatestMovies(response.data.results)) 
                : 
                    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.filters.title}&page=${page+1}`)
                        .then(response => this.props.startSearchMoreMovie(response.data.results)) 
            ) : null               
    }

    render() {
        return (
        <div >
            <MovieSearch />
            <div className="movieCardList">
            <MovieCardList onScroll={(e) => this.handleScroll(e)}/>
            </div>
        </div>
        )
    }
} 

const mapStateToProps = (state) => ({
    movies: state.movies,
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
    startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
    resetPage: () => dispatch(resetPage()),
    startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
