import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import MovieCardList from "./movieCardList";
import MovieSearch from "./movieSearch";
import Header from "./Header";

import { startSetLatestMovies, startSetSearchMovie, startSearchMoreMovie, resetPage, startSetPopularMovies } from "../store/actions/moviesActions";

import "../styles/styles.css"

class HomePage extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        console.log("Homepage.js --> componentDidMount()")
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.movies.moviesList !== nextProps.movies.moviesList
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("from HomePage.js ---> componentDidUpdate");
        console.log("prevprops:", prevProps, "this.props:", this.props)
        // if (prevProps.movies.moviesMode !== this.props.movies.moviesMode && prevProps.movies.infiniteScrollPage !== 0) {
        //     this.props.resetPage();
        //     console.log("from HomePage.js: resetPage()");
        // };
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
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
                        .then(response => this.props.startSetLatestMovies(response.data.results)) 
        }
        else if (clientHeight + scrollTop === scrollHeight && this.props.movies.moviesMode === 'popular') {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&page=${page+1}`)
                        .then(response => this.props.startSetPopularMovies(response.data.results)) 
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
    resetPage: () => dispatch(resetPage()),
    startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
    startSetPopularMovies: (movies) => dispatch(startSetPopularMovies(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
