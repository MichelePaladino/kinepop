import React, { Component } from "react";
import { connect } from "react-redux"
import axios from "axios";
import uuid from "uuid";

import MovieCard from "./MovieCard";
import { startSetPeopleInfo, startResetPeopleInfo } from "../store/actions/peopleInfoActions";

import { Grid, GridCell } from "rmwc/Grid";
import { ImageListImage } from 'rmwc/ImageList';
import { Typography } from 'rmwc/Typography';

const API_KEY=`${process.env.REACT_APP_TMDB_API_KEY}`;

class PeopleInfo extends Component {
  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/person/${this.props.match.params.id}?api_key=${API_KEY}&append_to_response=movie_credits`)
        .then(response => this.props.startSetPeopleInfo(response.data));
        window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.startResetPeopleInfo();
  }

  render () {
      let loaded = this.props.peopleInfo.loaded;
      let cover = this.props.peopleInfo.profile_path ? `https://image.tmdb.org/t/p/original${this.props.peopleInfo.profile_path}` :  
      "https://yt3.ggpht.com/-uGYJvczbuow/AAAAAAAAAAI/AAAAAAAAAAA/VQbgt1FitYs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg";
      return (loaded &&
          <div className="MovieInfo">
            <Grid className="Grid">
              <GridCell span="12">
              <ImageListImage  style={{  width: '100%', maxHeight: '900px', maxWidth: "600px", display: 'block', margin: '0 auto' }} src={cover}/>
              </GridCell>
            </Grid>
            <Grid className="Grid Grid__content">
              <GridCell span="12"><Typography use="headline2" >{this.props.peopleInfo.name}</Typography></GridCell>
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
              {
                this.props.peopleInfo.crew.filter((movie, index) => {
                if (index <= (this.props.peopleInfo.crew.length - 2)) {
                  return this.props.peopleInfo.crew[index].id !== this.props.peopleInfo.crew[index+1].id || this.props.peopleInfo.crew[index] === this.props.peopleInfo.crew[(this.props.peopleInfo.crew.length - 2)]
                } else return false
                }).map(movie => <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>)
              }
            </div>
          </div>
        );
      }
    }
      
const mapStateToProps = (state) => ({
    peopleInfo: state.peopleInfo,
  })
  
const mapDispatchToProps = (dispatch) => ({
  startSetPeopleInfo: (payload) => dispatch(startSetPeopleInfo(payload)),
  startResetPeopleInfo: () => dispatch(startResetPeopleInfo()),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PeopleInfo);