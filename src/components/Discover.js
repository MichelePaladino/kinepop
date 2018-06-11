import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { Select } from "rmwc/Select";
import { TextField, TextFieldHelperText } from 'rmwc/TextField';
import { Switch } from 'rmwc/Switch';

import { Checkbox } from 'rmwc/Checkbox';
import { Button } from 'rmwc/Button';
import { TabBar, Tab, TabIcon, TabIconText } from 'rmwc/Tabs';

import MoviesList from "./MoviesList";

import { startPopulateMoviesList, resetMoviesList, incrementPageMoviesList } from "../store/actions/moviesListActions";
import { startOnChangeSortBy, onChangeStartDate, onChangeEndDate, onChangePrimaryReleaseDate, resetDates, toggleGenre, onChangeTab, onChangeSwitch, onChangeGenre } from "../store/actions/discoverActions";

class Discover extends Component {

  requestMovies = (page) => {
  const sort = this.props.discover.sortBy ? `&sort_by=${this.props.discover.sortBy}` : '';
  const year = this.props.discover.primaryReleaseDate ? `&primary_release_year=${this.props.discover.primaryReleaseDate}` : '';
  const startDate = this.props.discover.startDate ? `&primary_release_date.gte=${this.props.discover.startDate}` : '';
  const endDate = this.props.discover.endDate ? `&primary_release_date.lte=${this.props.discover.endDate}` : '';
  const genres = this.props.discover.genres.length > 0 ? `&with_genres=${this.props.discover.genres.join(',')}` : '';

    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c0ba1f468f4848a2eb2a4855af9c31d8${sort}${year}${startDate}${endDate}${genres}&page=${page}`)
      .then(response => this.props.startPopulateMoviesList(response.data.results));
  }

  render() {
    return (
      <div>
        <div className="Discover">
          <TabBar className="Discover__TapBar"
            activeTabIndex={this.props.discover.activeTabIndex}
            onChange={this.props.onChangeTab}
          >
            <Tab className="Discover__Tab"><TabIcon>sort</TabIcon><TabIconText>Sort</TabIconText></Tab>
            <Tab className="Discover__Tab"><TabIcon>movie</TabIcon><TabIconText>Genres</TabIconText></Tab>
            <Tab className="Discover__Tab"><TabIcon>calendar_today</TabIcon><TabIconText>Year</TabIconText></Tab>
          </TabBar>
          {this.props.discover.activeTabIndex === 0 && <Select
            className="Discover__Sort"
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
          />}
          {this.props.discover.activeTabIndex === 2 && 
          <div className="Discover__Year">
            <Switch
              checked={!!this.props.discover.yearCheck}
              onChange={(e) => {
                  this.props.onChangeSwitch(e.target.checked);
                  this.props.resetDates();
              }}>
              Single Date | Range
            </Switch>
            <br/>
            <div>
              <TextField disabled={this.props.discover.yearCheck} invalid={this.props.discover.primaryReleaseDate.length > 4} outlined label="year" value={this.props.discover.primaryReleaseDate} onChange={this.props.onChangePrimaryReleaseDate} withLeadingIcon='event' />
              <TextFieldHelperText>1990</TextFieldHelperText>
            </div>

            <div style={{display: "flex"}}>
              <div><TextField disabled={!this.props.discover.yearCheck} invalid={this.props.discover.startDate.length > 4} outlined label="start date" value={this.props.discover.startDate} onChange={this.props.onChangeStartDate} withLeadingIcon='event_note' />
              <TextFieldHelperText>1897</TextFieldHelperText></div>
              <div><TextField disabled={!this.props.discover.yearCheck} invalid={this.props.discover.endDate.length > 4} outlined label="end date" value={this.props.discover.endDate} onChange={this.props.onChangeEndDate}/>
              <TextFieldHelperText>2018</TextFieldHelperText></div>
            </div>
          </div>
          }
          {this.props.discover.activeTabIndex === 1 && 
          <div className='Discover_Genres'>
            <Checkbox
              checked={this.props.discover.actionChecked || false}
              onChange={e => {
                this.props.onChangeGenre("actionChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}

              value={28}
              >
              Action&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.adventureChecked || false}
              onChange={e => {
                this.props.onChangeGenre("adventureChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={12}
              >
              Adventure&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.animationChecked || false}
              onChange={e => {
                this.props.onChangeGenre("animationChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={16}
              >
              Animation&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.comedyChecked || false}
              onChange={e => {
                this.props.onChangeGenre("comedyChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={35}
              >
              Comedy&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.crimeChecked || false}
              onChange={e => {
                this.props.onChangeGenre("crimeChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={80}
              >
              Crime&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.documentaryChecked || false}
              onChange={e => {
                this.props.onChangeGenre("documentaryChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={99}
              >
              Documentary&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.dramaChecked || false}
              onChange={e => {
                this.props.onChangeGenre("dramaChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={18}
              >
              Drama&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.familyChecked || false}
              onChange={e => {
                this.props.onChangeGenre("familyChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={10751}
              >
              Family&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.fantasyChecked || false}
              onChange={e => {
                this.props.onChangeGenre("fantasyChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={14}
              >
              Fantasy&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.historyChecked || false}
              onChange={e => {
                this.props.onChangeGenre("historyChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={36}
              >
              History&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.horrorChecked || false}
              onChange={e => {
                this.props.onChangeGenre("horrorChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={27}
              >
              Horror&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.musicChecked || false}
              onChange={e => {
                this.props.onChangeGenre("musicChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={10402}
              >
              Music&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.misteryChecked || false}
              onChange={e => {
                this.props.onChangeGenre("misteryChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={9648}
              >
              Mystery&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.romanceChecked || false}
              onChange={e => {
                this.props.onChangeGenre("romanceChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={10749}
              >
              Romance&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.sciencefictionChecked || false}
              onChange={e => {
                this.props.onChangeGenre("sciencefictionChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={878}
              >
              Science Fiction&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.thrillerChecked || false}
              onChange={e => {
                this.props.onChangeGenre("thrillerChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={53}
              >
              Thriller&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.warChecked || false}
              onChange={e => {
                this.props.onChangeGenre("warChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={10752}
              >
              War&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
            <Checkbox
              checked={this.props.discover.westernChecked || false}
              onChange={e => {
                this.props.onChangeGenre("westernChecked", e.target.checked);
                this.props.toggleGenre(e.target.value);
              }}
              value={37}
              >
              Western&nbsp;&nbsp;&nbsp;&nbsp;
            </Checkbox>
          </div>}

          <Button raised theme="secondary-bg on-secondary" className="Discover__Button" onClick={() => {
            this.props.resetMoviesList();
            this.requestMovies(1);
            }}
            >Discover Movies!</Button>
        </div>
        <MoviesList requestMovies={this.requestMovies} incrementPageMoviesList={this.props.incrementPageMoviesList}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discover: state.discover,
});

const mapDispatchToProps = dispatch => ({
  startOnChangeSortBy: (e) => dispatch(startOnChangeSortBy(e)),
  onChangeStartDate: (e) => dispatch(onChangeStartDate(e.target.value)),
  onChangeEndDate: (e) => dispatch(onChangeEndDate(e.target.value)),
  onChangePrimaryReleaseDate: (e) => dispatch(onChangePrimaryReleaseDate(e.target.value)),
  resetDates: () => dispatch(resetDates()),
  toggleGenre: (genre) => dispatch(toggleGenre(genre)),
  onChangeTab: (e) => dispatch(onChangeTab(e.target.value)),
  onChangeSwitch: (checked) => dispatch(onChangeSwitch(checked)),
  onChangeGenre: (genre, toggle) => dispatch(onChangeGenre(genre, toggle)),

  startPopulateMoviesList: (movies) => dispatch(startPopulateMoviesList(movies)), 
  resetMoviesList: () => dispatch(resetMoviesList()), 
  incrementPageMoviesList: () => dispatch(incrementPageMoviesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
