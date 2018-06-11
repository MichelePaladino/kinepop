import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Drawer, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";
import { Icon } from 'rmwc/Icon';

import { closeSideDrawer } from "../store/actions/uiActions"

class SideDrawer extends Component {
  render () {
    return (
      <Drawer
        temporary
        open={this.props.ui.sideDrawer}
        onClick={(e) => this.props.closeSideDrawer(e)}
        className="Drawer"
      >
        <DrawerContent className="Drawer__Content">
         <Link className="Link" to="/">
            <ListItem><Icon strategy="ligature" use="home"/><ListItemText>&nbsp;&nbsp;LANDING</ListItemText></ListItem>
          </Link>
          <Link className="Link" to="/movies/discover/">
            <ListItem><Icon strategy="ligature" use="language"/><ListItemText>&nbsp;&nbsp;&nbsp;DISCOVER</ListItemText></ListItem>
          </Link>
          <Link className='Link' to="/movies/now_playing/">
            <ListItem><Icon strategy="ligature" use="weekend"/><ListItemText>&nbsp;&nbsp;&nbsp;NOW PLAYING</ListItemText></ListItem>
          </Link>
          <Link className='Link' to="/movies/upcoming/">
            <ListItem><Icon strategy="ligature" use="theaters"/><ListItemText>&nbsp;&nbsp;&nbsp;UPCOMING</ListItemText></ListItem>
          </Link>
          <Link className='Link' to="/movies/search/">
            <ListItem><Icon strategy="ligature" use="search"/><ListItemText>&nbsp;&nbsp;&nbsp;SEARCH</ListItemText></ListItem>
          </Link>
        </DrawerContent>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui
})

const mapDispatchToProps = (dispatch) => ({
  closeSideDrawer: (e) => dispatch(closeSideDrawer(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)