import React, { Component } from "react";
import { connect } from "react-redux"
import axios from "axios";
import Youtube from "react-youtube";
import uuid from "uuid";

import { startSetMovieInfo, startResetMovieInfo } from "../store/actions/movieInfoActions";
import { setMoviesModeToSearch } from "../store/actions/moviesActions";
import PeopleCard from "./PeopleCard";

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

class MovieInfo extends Component {
  // state = {
  //   player: null,
  //   isPlaying: false
  // }

  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&append_to_response=videos,similar,credits`)
        // .then(response => console.log("componentDidMount() ---> response to use to update state dispatching:", response))
        .then(response => this.props.startSetMovieInfo(response.data));
        // this.props.setMoviesModeToSearch();
        window.scrollTo(0, 0);
  }

  // onReady = (event) => {
  //   this.setState({
  //     player: event.target,
  //   });
  // }

  // onPlayVideo = () => {
  //   this.state.player.playVideo();
  // }

  // onPauseVideo = () => {
  //   this.state.player.pauseVideo();
  // }

  componentWillUnmount() {
    this.props.startResetMovieInfo();
  }



  render() {
    let loaded = this.props.movieInfo.loaded;
    let cover = this.props.movieInfo.backdrop_path ? `https://image.tmdb.org/t/p/original${this.props.movieInfo.backdrop_path}` :  
    "https://experienceluxury.co/wp-content/uploads/2016/08/private-cinema.jpg";
    return (loaded &&
      <div className="MovieInfo">
        <Grid className="Grid">
          <GridCell span="12">
          <ImageListImage src={cover}/>
          </GridCell>
        </Grid>
        <Grid className="Grid Grid__title">
          <GridCell span="12"><Typography use="headline2" >{this.props.movieInfo.title}</Typography></GridCell>
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
        <Grid className="Grid">
          <GridCell span="12">
            {this.props.movieInfo.videos[0] && <Youtube className="Youtube" videoId={this.props.movieInfo.videos[0].key} onReady={this.onReady} opts={{playerVars: {playlist: `${this.props.movieInfo.videos.slice(1).map(el=>el.key).join(',')}`, color: "white", controls: 1, iv_load_policy: 3, rel: 0}}}/>}
          </GridCell>
        </Grid>
        <div className="movieCardList">
        {this.props.movieInfo.cast.map(people => {
          return <PeopleCard job={people.job} key={uuid()} id={people.id} char={people.character} name={people.name} pic={people.profile_path} order={people.order}/>
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

{/* <Youtube className="Youtube" videoId={this.props.movieInfo.videos[0].key} 
onReady={this.onReady} 
opts={{playerVars: {playlist: `${this.props.movieInfo.videos.slice(1).map(el=>el.key).join(',')}`, color: "white", controls: 1, iv_load_policy: 3, rel: 0}}}/> */}

const mapStateToProps = (state) => ({
  movieInfo: state.movieInfo,
  // movies: state.movies,
  // filters: state.filters,
  // ui: state.ui
})

const mapDispatchToProps = (dispatch) => ({
  startSetMovieInfo: (payload) => dispatch(startSetMovieInfo(payload)),
  setMoviesModeToSearch: () => dispatch(setMoviesModeToSearch()),
  startResetMovieInfo: () => dispatch(startResetMovieInfo()),

  // startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
  // startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
  // resetPage: () => dispatch(resetPage()),
  // startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
  // startSetPopularMovies: (movies) => dispatch(startSetPopularMovies(movies))
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);