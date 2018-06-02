import React, { Component } from "react";
import { connect } from "react-redux"
import axios from "axios";
import uuid from "uuid";

import MovieCard from "./movieCard";

import { startSetPeopleInfo } from "../store/actions/peopleInfoActions";
// import { setMoviesModeToSearch } from "../store/actions/moviesActions";


import { Grid, GridCell } from "rmwc/Grid";
import { 
  ImageList,
  ImageListItem,
  ImageListImageAspectContainer,
  ImageListImage,
  ImageListSupporting,
  ImageListLabel
} from 'rmwc/ImageList';
import { ShapeContainer } from 'rmwc/Shape';
import { Card, CardPrimaryAction, CardMedia } from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';


class PeopleInfo extends Component {
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/person/${this.props.match.params.id}?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&append_to_response=movie_credits`)
          .then(response => this.props.startSetPeopleInfo(response.data));
          window.scrollTo(0, 0);
        //   this.props.setMoviesModeToSearch() ¬¬ DOUBLE BACK TO THE FUTURE
    }
    render () {
        let loaded = this.props.peopleInfo.loaded;
        let cover = this.props.peopleInfo.profile_path ? `https://image.tmdb.org/t/p/original${this.props.peopleInfo.profile_path}` :  
        "https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";
        return (loaded &&
            <div className="MovieInfo">
              <Grid className="Grid">
                <GridCell span="12">
                <ImageListImage src={cover}/>
                </GridCell>
              </Grid>
              <Grid className="Grid Grid__title">
                <GridCell span="12"><Typography use="headline2" >{this.props.peopleInfo.name}</Typography></GridCell>
              </Grid>
              <Grid className="Grid">
                <GridCell span="3">1</GridCell>
                <GridCell span="3">2</GridCell>
                <GridCell span="3">3</GridCell>
                <GridCell span="3">3+</GridCell>
              </Grid>
              <Grid className="Grid">
                <GridCell span="4">4</GridCell>
                <GridCell span="4">5</GridCell>
                <GridCell span="4">6</GridCell>
              </Grid>
              <div className="movieCardList">
              {this.props.peopleInfo.cast.map(movie => {
                return <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>
              })}
              </div>
      
      
              {/* <ShapeContainer
                topLeftCorner="20"
                bottomRightCorner="20"
                outlineWidth="1"
                outlineColor="#e0e0e0"
              >
                <Card outlined >
                  <CardPrimaryAction>
                    <div style={{display: 'flex'}}>
                      <CardMedia square style={{
                        width: '30rem',
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.movieInfo.backdrop_path})`
                        }}
                      />
                      <div style={{padding: '20px'}}>
                          Card
                      </div>
                    </div>
                  </CardPrimaryAction>
                </Card>
              </ShapeContainer> */}
      
      
      
              {/* <Grid className="Grid">
                <GridCell span="4"><button onClick={this.onPlayVideo}>Play</button></GridCell>
                <GridCell span="4"><button onClick={this.onPauseVideo}>Pause</button></GridCell>
                <GridCell span="4"><button onClick={this.onChangeVideo}>Change Video</button></GridCell>
              </Grid> */}
            </div>
          );
        }
      }
      



const mapStateToProps = (state) => ({
    peopleInfo: state.peopleInfo,
    // movieInfo: state.movieInfo,
    // movies: state.movies,
    // filters: state.filters,
    // ui: state.ui
  })
  
  const mapDispatchToProps = (dispatch) => ({
    startSetPeopleInfo: (payload) => dispatch(startSetPeopleInfo(payload)),
    // setMoviesModeToSearch: () => dispatch(setMoviesModeToSearch()),
  
    // startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
    // startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
    // resetPage: () => dispatch(resetPage()),
    // startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
    // startSetPopularMovies: (movies) => dispatch(startSetPopularMovies(movies))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PeopleInfo);