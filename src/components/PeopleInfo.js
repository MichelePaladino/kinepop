import React, { Component } from "react";
import { connect } from "react-redux"
import axios from "axios";
import uuid from "uuid";

import MovieCard from "./movieCard";

import { startSetPeopleInfo, startResetPeopleInfo } from "../store/actions/peopleInfoActions";
// import { setMoviesModeToSearch } from "../store/actions/moviesActions";

import { LinearProgress } from 'rmwc/LinearProgress';
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

    componentWillUnmount() {
      this.props.startResetPeopleInfo();
    }

    render () {
        let loaded = this.props.peopleInfo.loaded;
        let cover = this.props.peopleInfo.profile_path ? `https://image.tmdb.org/t/p/original${this.props.peopleInfo.profile_path}` :  
        "https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";
        // if (loaded) {
        //   let nuova = this.props.peopleInfo.crew.filter((movie, index) => {
        //     if (index <= (this.props.peopleInfo.crew.length - 2)) {
        //       return this.props.peopleInfo.crew[index].id !== this.props.peopleInfo.crew[index+1].id
        //     }
        //   });
        //   console.log('LA NUOVA ARRAY', nuova)
        // };
        return (loaded &&
            <div className="MovieInfo">
              <Grid className="Grid">
                <GridCell span="12">
                <ImageListImage  style={{  width: '100%', maxHeight: '900px', maxWidth: "600px", display: 'block', margin: '0 auto' }} src={cover}/>
                </GridCell>
              </Grid>
              <Grid className="Grid Grid__content">
                <GridCell span="12"><Typography use="headline2" >{this.props.peopleInfo.name}</Typography></GridCell>
                {/* <GridCell span="12"><Typography use="subtitle1">{this.props.peopleInfo.birthday}</Typography></GridCell> */}
                {/* <GridCell span="12"><Typography use="button">{this.props.peopleInfo.place_of_birth}</Typography></GridCell> */}
              </Grid>
              <hr style={{border: 'none', width: '80%', height: '14px', borderRadius: '25px', boxShadow: '0px 10px 16px -5px rgba(46,46,46,1)' }} />
              <br/>
              <div className="movieCardList">
                {this.props.peopleInfo.cast.map(movie => {
                  return <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>
                })}
              </div>
              {this.props.peopleInfo.crew.length > 0 && 
              <Grid className="Grid Grid__content">
                <br/><GridCell span="12"><Typography use="headline2">Crew</Typography></GridCell>
              </Grid>}
              <div className="movieCardList">
                {this.props.peopleInfo.crew.filter((movie, index) => {
                  if (index <= (this.props.peopleInfo.crew.length - 2)) {
                    return this.props.peopleInfo.crew[index].id !== this.props.peopleInfo.crew[index+1].id || this.props.peopleInfo.crew[index] === this.props.peopleInfo.crew[(this.props.peopleInfo.crew.length - 2)]
                  }
                }).map(movie => {
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
    startResetPeopleInfo: () => dispatch(startResetPeopleInfo()),
  
    // startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
    // startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
    // resetPage: () => dispatch(resetPage()),
    // startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
    // startSetPopularMovies: (movies) => dispatch(startSetPopularMovies(movies))
  })
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(PeopleInfo);