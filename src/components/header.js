import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { startSetLatestMovies, startSetSearchMovie, startSearchMoreMovie, resetPage } from "../store/actions/moviesActions";
import { openSideDrawer } from "../store/actions/uiActions"

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

  render() {

    return (
      <TopAppBar fixed onNav={(e) => this.props.openSideDrawer(e)}>
            <TopAppBarRow>
              <TopAppBarSection alignStart>
                <TopAppBarNavigationIcon use="menu" />
                <TopAppBarTitle><Link className="header__title" to="/">KinePOP</Link></TopAppBarTitle>
              </TopAppBarSection>
              <TopAppBarSection alignEnd>
                <TopAppBarActionItem aria-label="Download" alt="Download">
                  file_download
                </TopAppBarActionItem>
                <TopAppBarActionItem
                  aria-label="Print this page"
                  alt="Print this page"
                >
                  print
                </TopAppBarActionItem>
                <TopAppBarActionItem
                  aria-label="Bookmark this page"
                  alt="Bookmark this page"
                >
                  bookmark
                </TopAppBarActionItem>
              </TopAppBarSection>
            </TopAppBarRow>
          </TopAppBar>
    )
  }
};

// const mapStateToProps = (state) => ({
//   movies: state.movies,
//   filters: state.filters,
// })

const mapDispatchToProps = (dispatch) => ({
  // startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
  // startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
  // resetPage: () => dispatch(resetPage()),
  // startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
  openSideDrawer: () => dispatch(openSideDrawer()),
})

export default connect(undefined, mapDispatchToProps)(Header);
