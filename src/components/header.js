import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { startSetLatestMovies, startSetSearchMovie, startSearchMoreMovie, resetPage } from "../store/actions/moviesActions";
import { openSideDrawer, closeSideDrawer } from "../store/actions/uiActions"

import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarNavigationIcon,
    TopAppBarActionItem,
    TopAppBarTitle
  } from 'rmwc/TopAppBar';
  
class Header extends Component {
  componentDidUpdate() {
    console.log("from Header.js --> componentDidUpdate")
  }

  goTop = () => window.scrollTo(0, 0);

  render() {
    const toggle = this.props.ui.sideDrawer ? (e) => this.props.closeSideDrawer(e) : (e) => this.props.openSideDrawer(e);
    return (
      <TopAppBar fixed onNav={toggle}>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon use="menu" />
            <TopAppBarTitle><Link className="header__title" to="/">KinePOP</Link></TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem aria-label="Go up" alt="Go up" onClick={this.goTop}>
              arrow_drop_up
            </TopAppBarActionItem>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    )
  }
};

const mapStateToProps = (state) => ({
  // movies: state.movies,
  // filters: state.filters,
  ui: state.ui,
})

const mapDispatchToProps = (dispatch) => ({
  // startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
  // startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
  // resetPage: () => dispatch(resetPage()),
  // startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
  openSideDrawer: () => dispatch(openSideDrawer()),
  closeSideDrawer: () => dispatch(closeSideDrawer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
