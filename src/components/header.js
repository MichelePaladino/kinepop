import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
  state = {
    visibility: 'hidden'
  }
  goTop = () => window.scrollTo(0, 0);
  componentDidMount () {
    window.addEventListener('scroll', this.handleGoTopVisibility, { passive: true });
    if (window.pageYOffset !== 0) {
      this.setState({visibility: 'visible'});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleGoTopVisibility);
  }

  handleGoTopVisibility = (e) => {
    e.stopPropagation();

    // let scrollTop = window.pageYOffset;
    // let clientHeight = window.innerHeight;
    // let scrollHeight = document.body.scrollHeight;

    if (window.pageYOffset !== 0) {
      this.setState({visibility: 'visible'})
    } else {
      this.setState({visibility: 'hidden'})
    }
  }

  render() {
    const visibilityState = this.state.visibility
    const toggle = this.props.ui.sideDrawer ? (e) => this.props.closeSideDrawer(e) : (e) => this.props.openSideDrawer(e);
    return (
      <TopAppBar fixed onNav={toggle}>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon use="menu" />
            <TopAppBarTitle><Link className="header__title" style={{color: '#fbfff6'}} to="/">KinePOP</Link></TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem style={{visibility: visibilityState}} aria-label="Go up" alt="Go up" onClick={this.goTop}>
              navigation
            </TopAppBarActionItem>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    )
  }
};

const mapStateToProps = (state) => ({
  ui: state.ui,
})

const mapDispatchToProps = (dispatch) => ({
  openSideDrawer: () => dispatch(openSideDrawer()),
  closeSideDrawer: () => dispatch(closeSideDrawer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
