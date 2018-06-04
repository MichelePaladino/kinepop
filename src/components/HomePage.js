import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import MovieCardList from "./movieCardList";
import MovieSearch from "./movieSearch";
import Header from "./Header";

import { startSetLatestMovies, startSetMoreLatestMovies, startSetMorePopularMovies, startSetSearchMovie, startSearchMoreMovie, startResetMoviesMode, startSetPopularMovies } from "../store/actions/moviesActions";
import { resetTitleFilter } from "../store/actions/filtersActions";

import "../styles/styles.css";

class HomePage extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        console.log("Homepage.js --> componentDidMount()")
        if (this.props.filters.title.length > 0 && this.props.movies.moviesMode === 'search') {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.filters.title}`)
            .then(response => {
                this.props.startSetSearchMovie(response.data.results);
                // this.props.startResetMoviesMode();
                this.props.resetTitleFilter()
            })
        }
        else if (this.props.match.params.mode === 'latest' && this.props.movies.moviesMode !== 'latest' ) {
            this.props.resetTitleFilter();
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
            .then(response => {
                this.props.startSetLatestMovies(response.data.results);
                window.scrollTo(0, 0);
            })
        }
        else if (this.props.match.params.mode === 'popular' && this.props.movies.moviesMode !== 'popular' ) {
            this.props.resetTitleFilter();
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c0ba1f468f4848a2eb2a4855af9c31d8`)
            .then(response => {
                this.props.startSetPopularMovies(response.data.results);
                window.scrollTo(0, 0);
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("from HomePage.js ---> componentDidUpdate");
        console.log("prevProps:", prevProps, "this.props:", this.props)
        // if (prevProps.movies.moviesMode.length !== 0 && prevProps.movies.moviesMode !== this.props.movies.moviesMode && this.props.match.params.mode !== prevProps.match.params.mode) {
        //     this.props.resetPage()
        // }
        // if (this.props.movies.moviesMode !== prevProps.movies.moviesMode && prevProps.movies.moviesMode.length > 1) {
        //     console.log("this.props.match.params.mode !== prevProps.match.params.mode");
        //     this.props.resetPage()
        // }
        if (prevProps.filters.title !== this.props.filters.title && this.props.filters.title !== "") {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.filters.title}`)
            .then(response => this.props.startSetSearchMovie(response.data.results));
            // this.props.resetPage(); ;
        } 
    
        // if (prevProps.movies.moviesMode !== this.props.movies.moviesMode) {
        //     // set initial load to TRUE
        //     this.props.resetPage()
        // }
        // if (prevProps.movies.moviesMode !== this.props.movies.moviesMode && prevProps.movies.infiniteScrollPage !== 0) {
        //     this.props.resetPage();
        //     console.log("from HomePage.js: resetPage()");
        // };
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        // this.props.resetPage()
    }

    handleScroll = (e) => {
        e.stopPropagation();

        let scrollTop = window.document.documentElement.scrollTop;
        let clientHeight = window.document.documentElement.clientHeight;

        let scrollHeight = window.document.documentElement.scrollHeight;

        let page = this.props.movies.infiniteScrollPage;

        // scrollTop >= (scrollHeight * 0.8) ? THIS FIRES TOO MUCH ACTIONS
        if (clientHeight + scrollTop === scrollHeight && this.props.movies.moviesMode === 'latest') {
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&page=${page+1}`)
                        .then(response => this.props.startSetMoreLatestMovies(response.data.results)) 
        }
        else if (clientHeight + scrollTop === scrollHeight && this.props.movies.moviesMode === 'popular') {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&page=${page+1}`)
                        .then(response => this.props.startSetMorePopularMovies(response.data.results)) 
        }
        else if (clientHeight + scrollTop === scrollHeight && this.props.movies.moviesMode === 'search') {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&query=${this.props.filters.title}&page=${page+1}`)
            .then(response => this.props.startSearchMoreMovie(response.data.results))
        }     
    }

    // handleOnNav = (e) => {
    //     this.props.toggleSideDrawer()
    // }

    render() {
        // let sideDrawer = this.props.ui.sideDrawer;
        // sideDrawer = sideDrawer ? <SideDrawer state={this.props.ui.sideDrawer} toggle={this.props.toggleSideDrawer}/> : null;

        return (
        <div>
            {/* {sideDrawer} */}
            <div className="content-container">
                <div className="movieSearch">
                    <MovieSearch />
                </div>
                <div className="movieCardList">
                    <MovieCardList onScroll={(e) => this.handleScroll(e)} mode={this.props.match.params.mode}/>
                </div>
            </div>
        </div>
        )
    }
} 

/* <Route path="/" component={landingPage} exact/>
<Route path="/movies/:mode" component={HomePage}/> */

// ANYTHING past /Movies/ must be passed as a prop to MovieCardList SO IT CAN ASK TO API DINAMYCALLY
// localhost:8080/movies/:mode
// this.props.match.params.mode

const mapStateToProps = (state) => ({
    movies: state.movies,
    filters: state.filters,
    // ui: state.ui
})

const mapDispatchToProps = (dispatch) => ({
    startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
    startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
    startResetMoviesMode: () => dispatch(startResetMoviesMode()),
    startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
    startSetPopularMovies: (movies) => dispatch(startSetPopularMovies(movies)),
    startSetMorePopularMovies: (movies) => dispatch(startSetMorePopularMovies(movies)),
    startSetMoreLatestMovies: (movies) => dispatch(startSetMoreLatestMovies(movies)),
    resetTitleFilter: () => dispatch(resetTitleFilter())
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
