import React, { Component } from "react";
import { connect } from "react-redux";

import { Icon } from 'rmwc/Icon';
import { Select } from "rmwc/Select";
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import { Switch } from 'rmwc/Switch';

import { startOnChangeSortBy, onChangeStartDate, onChangeEndDate, onChangePrimaryReleaseDate, resetDates } from "../store/actions/discoverActions";

class Discover extends Component {
    state = {
        yearCheck: false,
    }
  render() {
    return (
      <div className="Discover">
        <Select
          value={this.props.discover.sortBy}
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

              /** Any additional items will be passed to the
               child ListItem as props */

              //   "aria-disabled": true,
              //   tabIndex: -1
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
              label: "Rating  ⇩",
              value: "vote_average.desc"
            },
            {
              label: "Rating  ⇧",
              value: "vote_average.asc"
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
        <div><TextField disabled={this.state.yearCheck} invalid={this.props.discover.primaryReleaseDate.length > 4} outlined label="year" value={this.props.discover.primaryReleaseDate} onChange={this.props.onChangePrimaryReleaseDate} withLeadingIcon='date_range' />
        <TextFieldHelperText>1990</TextFieldHelperText></div>
        <div style={{display: "flex"}}>
            <div><TextField disabled={!this.state.yearCheck} invalid={this.props.discover.startDate.length > 4} outlined label="start date" value={this.props.discover.startDate} onChange={this.props.onChangeStartDate} withLeadingIcon='date_range' />
            <TextFieldHelperText>1897</TextFieldHelperText></div>
            <div><TextField disabled={!this.state.yearCheck} invalid={this.props.discover.endDate.length > 4} outlined label="end date" value={this.props.discover.endDate} onChange={this.props.onChangeEndDate}/>
            <TextFieldHelperText>2018</TextFieldHelperText></div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
