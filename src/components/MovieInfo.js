import React, { Component } from "react";
import { connect } from "react-redux"
import axios from "axios";
import Youtube from "react-youtube";
import uuid from "uuid";

import { startSetMovieInfo, startResetMovieInfo } from "../store/actions/movieInfoActions";

import PeopleCard from "./PeopleCard";

import { Grid, GridCell } from "rmwc/Grid";
import { ImageListImage } from 'rmwc/ImageList';

import { Typography } from 'rmwc/Typography';

class MovieInfo extends Component {

  componentDidMount() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&append_to_response=videos,similar,credits`)
        .then(response => this.props.startSetMovieInfo(response.data));
        window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.startResetMovieInfo();
  }

  render() {
    let loaded = this.props.movieInfo.loaded;
    let cover = this.props.movieInfo.backdrop_path ? `https://image.tmdb.org/t/p/original${this.props.movieInfo.backdrop_path}` :  
    "https://experienceluxury.co/wp-content/uploads/2016/08/private-cinema.jpg";
    return (loaded &&
      <div className="MovieInfo">
        <Grid className="Grid ">
          <GridCell span="12"><ImageListImage style={{  width: '100%', maxHeight: '900px', maxWidth: "1200px", display: 'block', margin: '0 auto' }} src={cover}/></GridCell>
        </Grid>
        <Grid className="Grid Grid__content">
          <GridCell span="12"><Typography use="headline3">{this.props.movieInfo.title}</Typography></GridCell>
        </Grid>
        {this.props.movieInfo.tagline && <Grid className="Grid Grid__content">
          <GridCell span="12"><Typography use="button">{this.props.movieInfo.tagline}</Typography></GridCell>
        </Grid>}
        {this.props.movieInfo.overview && <Grid className="Grid Grid__content">
          <GridCell span="12"><Typography use="body1">{this.props.movieInfo.overview}</Typography></GridCell>
        </Grid>}
        <Grid className="Grid Grid__content">
          <GridCell tablet="4" phone="4" span="3"><Typography use="overline">{`Release: `}</Typography><Typography use="body2">{`${this.props.movieInfo.release_date}`}</Typography></GridCell>
          <GridCell tablet="4" phone="4" span="3"><Typography use="overline">{`Length: `}</Typography><Typography use="body2">{this.props.movieInfo.runtime !== null ? `${this.props.movieInfo.runtime}"` : `Unknown`}</Typography></GridCell>
          <GridCell tablet="4" phone="4" span="3"><Typography use="overline">{`Revenue: `}</Typography><Typography use="body2">{this.props.movieInfo.revenue !== 0 ? `${this.props.movieInfo.revenue.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}$` : `Unknown`}</Typography></GridCell>
          <GridCell tablet="4" phone="4" span="3"><Typography use="overline">{`Budget: `}</Typography><Typography use="body2">{this.props.movieInfo.budget !== 0 ? `${this.props.movieInfo.budget.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')}$` : `Unknown`}</Typography></GridCell>
        </Grid>
        <Grid className="Grid">
          <GridCell span="12">
            {this.props.movieInfo.videos[0] && <Youtube className="Youtube" videoId={this.props.movieInfo.videos[0].key} onReady={this.onReady} opts={{playerVars: {playlist: `${this.props.movieInfo.videos.slice(1).map(el=>el.key).join(',')}`, color: "white", controls: 1, iv_load_policy: 3, rel: 0}}}/>}
          </GridCell>
        </Grid>
        <hr style={{border: 'none', width: '80%', height: '14px', borderRadius: '25px', boxShadow: '0px 10px 16px -5px rgba(46,46,46,1)' }} />
        <br/>
        <div className="movieCardList">
        {this.props.movieInfo.cast.map(people => {
          return <PeopleCard job={people.job} key={uuid()} id={people.id} char={people.character} name={people.name} pic={people.profile_path} order={people.order}/>
        })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieInfo: state.movieInfo,
})

const mapDispatchToProps = (dispatch) => ({
  startSetMovieInfo: (payload) => dispatch(startSetMovieInfo(payload)),
  startResetMovieInfo: () => dispatch(startResetMovieInfo()),
})


export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);