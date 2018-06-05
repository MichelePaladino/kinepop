import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import uuid from "uuid";

import { Icon } from 'rmwc/Icon';
import { Select } from "rmwc/Select";
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import { Switch } from 'rmwc/Switch';
import { Radio } from 'rmwc/Radio';
import { Checkbox } from 'rmwc/Checkbox';
import { Button, ButtonIcon } from 'rmwc/Button';

import MovieCard from "./movieCard";
import { startOnChangeSortBy, onChangeStartDate, onChangeEndDate, onChangePrimaryReleaseDate, resetDates, setRating, toggleGenre, startPopulateMovies, resetDiscover } from "../store/actions/discoverActions";

class Discover extends Component {
    state = {
        yearCheck: false,
        page: 1,
        actionChecked: false,
        animationChecked: false,
        adventureChecked: false,
        comedyChecked: false,
        crimeChecked: false,
        documentaryChecked: false,
        dramaChecked: false,
        familyChecked: false,
        fantasyChecked: false,
        historyChecked: false,
        horrorChecked: false,
        musicChecked: false,
        mysteryChecked: false,
        romanceChecked: false,
        sciencefictionChecked: false,
        thrillerChecked: false,
        warChecked: false,
        westernChecked: false,
    }
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    if (this.props.discover.movies.length === 0) {
      this.requestMovies(this.state.page);
    }
  }
  componentDidUpdate() {
    console.log("Discover.js didUpdate!");
    // new props? (specifically, the movieList!) --> render again! with movies!  return (movieListWithMovies && <movieCardList ...>)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

  requestMovies = (page) => {
  const sort = this.props.discover.sortBy ? `&sort_by=${this.props.discover.sortBy}` : '';
  const year = this.props.discover.primaryReleaseDate ? `&primary_release_year=${this.props.discover.primaryReleaseDate}` : '';
  const startDate = this.props.discover.startDate ? `&primary_release_date.gte=${this.props.discover.startDate}` : '';
  const endDate = this.props.discover.endDate ? `&primary_release_date.lte=${this.props.discover.endDate}` : '';
  const genres = this.props.discover.genres.length > 0 ? `&with_genres=${this.props.discover.genres.join(',')}` : '';
  // NOT A GOOD UX RIGHT NOW ---> const rating = this.props.discover.rating && this.props.discover.rating >= 6 ? `&vote_average.gte=${this.props.discover.rating}&vote_count.gte=999` :
  //   this.props.discover.rating && this.props.discover.rating <= 5.9 ? `&vote_average.lte=${this.props.discover.rating}` :
  //  '';

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8${sort}${year}${startDate}${endDate}${genres}&page=${page}`)
      .then(response => this.props.startPopulateMovies(response.data.results));
// https://api.themoviedb.org/3/discover/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8&sort_by=popularity.desc&primary_release_year=1990
  }

  handleScroll = (e) => {
    e.stopPropagation();

    let scrollTop = window.document.documentElement.scrollTop;
    let clientHeight = window.document.documentElement.clientHeight;
    let scrollHeight = window.document.documentElement.scrollHeight;

    if (clientHeight + scrollTop === scrollHeight) {
        this.requestMovies(this.state.page + 1)
        this.setState({page: this.state.page + 1})
    }
}

  render() {
    return (
      <div className="Discover">
        <Select
          // value={this.props.discover.sortBy}
          onChange={this.props.startOnChangeSortBy}
          label="Sort by"
          placeholder=""
          options={[
            {
              label: "Popularity  ⇩",
              value: "popularity.desc"
            },
            {
              label: "Popularity  ⇧",
              value: "popularity.asc"
            },
            {
              label: "Rating  ⇩",
              value: "vote_average.desc&vote_count.gte=100"
            },
            {
              label: "Rating  ⇧",
              value: "vote_average.asc&vote_count.gte=100"
            },
            {
              label: "Release date  ⇩",
              value: "primary_release_date.desc"
            },
            {
              label: "Release date  ⇧",
              value: "primary_release_date.asc"
            },
            {
              label: "Title  ⇩",
              value: "original_title.desc"
            },
            {
              label: "Title  ⇧",
              value: "original_title.asc"
            },
            {
              label: "Revenue  ⇩",
              value: "revenue.desc"
            },
            {
              label: "Revenue  ⇧",
              value: "revenue.asc"
            }
          ]}
        />
        <Switch
            checked={!!this.state.yearCheck}
            onChange={e => {
                this.setState({yearCheck: e.target.checked});
                this.props.resetDates();
            }}>
            Date Range
        </Switch>
        <div><TextField disabled={this.state.yearCheck} invalid={this.props.discover.primaryReleaseDate.length > 4} outlined label="year" value={this.props.discover.primaryReleaseDate} onChange={this.props.onChangePrimaryReleaseDate} withLeadingIcon='calendar_today' />
        <TextFieldHelperText>1990</TextFieldHelperText></div>
        <div style={{display: "flex"}}>
            <div><TextField disabled={!this.state.yearCheck} invalid={this.props.discover.startDate.length > 4} outlined label="start date" value={this.props.discover.startDate} onChange={this.props.onChangeStartDate} withLeadingIcon='date_range' />
            <TextFieldHelperText>1897</TextFieldHelperText></div>
            <div><TextField disabled={!this.state.yearCheck} invalid={this.props.discover.endDate.length > 4} outlined label="end date" value={this.props.discover.endDate} onChange={this.props.onChangeEndDate}/>
            <TextFieldHelperText>2018</TextFieldHelperText></div>
        </div>
        {/* <div>      //REMOVED ---> NOT A GOOD UX RIGHT NOW
          <Radio
            label="Top-Rated Movies"
            value="8"
            name="ratingRadio"
            onChange={this.props.setRating}
          />

          <Radio
            label="High-Rated Movies"
            value="6"
            name="ratingRadio"
            onChange={this.props.setRating}
          />

          <Radio
            label="Worst-Rated Movies"
            value="5.9"
            name="ratingRadio"
            onChange={this.props.setRating}
          />
        </div> */}
        <div>
          <Checkbox
            checked={this.state.actionChecked || false}
            onChange={e => {
              this.setState({actionChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={28}
            >
            Action
          </Checkbox>
          <Checkbox
            checked={this.state.adventureChecked || false}
            onChange={e => {
              this.setState({adventureChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={12}
            >
            Adventure
          </Checkbox>
          <Checkbox
            checked={this.state.animationChecked || false}
            onChange={e => {
              this.setState({animationChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={16}
            >
            Animation
          </Checkbox>
          <Checkbox
            checked={this.state.comedyChecked || false}
            onChange={e => {
              this.setState({comedyChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={35}
            >
            Comedy
          </Checkbox>
          <Checkbox
            checked={this.state.crimeChecked || false}
            onChange={e => {
              this.setState({crimeChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={80}
            >
            Crime
          </Checkbox>
          <Checkbox
            checked={this.state.documentaryChecked || false}
            onChange={e => {
              this.setState({documentaryChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={99}
            >
            Documentary
          </Checkbox>
          <Checkbox
            checked={this.state.dramaChecked || false}
            onChange={e => {
              this.setState({dramaChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={18}
            >
            Drama
          </Checkbox>
          <Checkbox
            checked={this.state.familyChecked || false}
            onChange={e => {
              this.setState({familyChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={10751}
            >
            Family
          </Checkbox>
          <Checkbox
            checked={this.state.fantasyChecked || false}
            onChange={e => {
              this.setState({fantasyChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={14}
            >
            Fantasy
          </Checkbox>
          <Checkbox
            checked={this.state.historyChecked || false}
            onChange={e => {
              this.setState({historyChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={36}
            >
            Action
          </Checkbox>
          <Checkbox
            checked={this.state.horrorChecked || false}
            onChange={e => {
              this.setState({horrorChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={27}
            >
            Horror
          </Checkbox>
          <Checkbox
            checked={this.state.musicChecked || false}
            onChange={e => {
              this.setState({musicChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={10402}
            >
            Music
          </Checkbox>
          <Checkbox
            checked={this.state.misteryChecked || false}
            onChange={e => {
              this.setState({misteryChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={9648}
            >
            Mystery
          </Checkbox>
          <Checkbox
            checked={this.state.romanceChecked || false}
            onChange={e => {
              this.setState({romanceChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={10749}
            >
            Romance
          </Checkbox>
          <Checkbox
            checked={this.state.sciencefictionChecked || false}
            onChange={e => {
              this.setState({sciencefictionChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={878}
            >
            Science Fiction
          </Checkbox>
          <Checkbox
            checked={this.state.thrillerChecked || false}
            onChange={e => {
              this.setState({thrillerChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={53}
            >
            Thriller
          </Checkbox>
          <Checkbox
            checked={this.state.warChecked || false}
            onChange={e => {
              this.setState({warChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={10752}
            >
            War
          </Checkbox>
          <Checkbox
            checked={this.state.westernChecked || false}
            onChange={e => {
              this.setState({westernChecked: e.target.checked});
              this.props.toggleGenre(e.target.value);
            }}
            value={37}
            >
            Western
          </Checkbox>
        </div>

        <Button raised theme="secondary-bg on-secondary" onClick={() => {
          this.props.resetDiscover();
          this.setState({
            // yearCheck: false,
            page: 1,
            // actionChecked: false,
            // animationChecked: false,
            // adventureChecked: false,
            // comedyChecked: false,
            // crimeChecked: false,
            // documentaryChecked: false,
            // dramaChecked: false,
            // familyChecked: false,
            // fantasyChecked: false,
            // historyChecked: false,
            // horrorChecked: false,
            // musicChecked: false,
            // mysteryChecked: false,
            // romanceChecked: false,
            // sciencefictionChecked: false,
            // thrillerChecked: false,
            // warChecked: false,
            // westernChecked: false,
           });
          this.requestMovies(1);
          }}
          >Discover Movies!</Button>
        <div className='movieCardList'>
        {this.props.discover.movies.length > 0 && this.props.discover.movies.map(movie => <MovieCard title={movie.title} year={movie.release_date} rating={movie.vote_average} poster={movie.poster_path} key={uuid()} id={movie.id} overview={movie.overview}/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // movies: state.movies,
  // filters: state.filters,
  // ui: state.ui,
  // movieInfo: state.movieInfo,
  // peopleInfo: state.peopleInfo,
  discover: state.discover
});

const mapDispatchToProps = dispatch => ({
  startOnChangeSortBy: (e) => dispatch(startOnChangeSortBy(e)),
  onChangeStartDate: (e) => dispatch(onChangeStartDate(e.target.value)),
  onChangeEndDate: (e) => dispatch(onChangeEndDate(e.target.value)),
  onChangePrimaryReleaseDate: (e) => dispatch(onChangePrimaryReleaseDate(e.target.value)),
  resetDates: () => dispatch(resetDates()),
  setRating: (e) => dispatch(setRating(e.target.value)),
  toggleGenre: (genre) => dispatch(toggleGenre(genre)),
  startPopulateMovies: (movies) => dispatch(startPopulateMovies(movies)),
  resetDiscover: () => dispatch(resetDiscover()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
