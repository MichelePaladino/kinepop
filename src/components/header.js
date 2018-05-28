import React, { Component } from "react";
import { connect } from "react-redux";

import { startSetLatestMovies, startSetSearchMovie, startSearchMoreMovie, resetPage } from "../store/actions/moviesActions";
import { startToggleSideDrawer } from "../store/actions/uiActions"

import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarNavigationIcon,
    TopAppBarActionItem,
    TopAppBarTitle
  } from 'rmwc/TopAppBar';
  
class Header extends Component {
  // handleOnNav = (e) => {
  //   this.props.toggleSideDrawer()
  // };

  render() {
    console.log("Header.js || render()")
    return (
      <TopAppBar fixed onNav={(e) => this.props.startToggleSideDrawer(e)}>
            <TopAppBarRow>
              <TopAppBarSection alignStart>
                <TopAppBarNavigationIcon use="menu" />
                <TopAppBarTitle>Title</TopAppBarTitle>
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

const mapStateToProps = (state) => ({
  movies: state.movies,
  filters: state.filters,
  ui: state.ui
})

const mapDispatchToProps = (dispatch) => ({
  startSetLatestMovies: (movies) => dispatch(startSetLatestMovies(movies)),
  startSetSearchMovie: (movies) => dispatch(startSetSearchMovie(movies)),
  resetPage: () => dispatch(resetPage()),
  startSearchMoreMovie: (movies) => dispatch(startSearchMoreMovie(movies)),
  startToggleSideDrawer: () => dispatch(startToggleSideDrawer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
