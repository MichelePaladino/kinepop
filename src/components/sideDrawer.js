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
            <ListItem><ListItemText><Icon strategy="ligature" use="star"/>LANDING</ListItemText></ListItem>
          </Link>
          <Link className="Link" to="/movies/discover/">
            <ListItem><ListItemText><Icon strategy="ligature" use="star"/>DISCOVER</ListItemText></ListItem>
          </Link>
          <Link className='Link' to="/movies/now_playing/">
            <ListItem><ListItemText><Icon strategy="ligature" use="star"/>NOW PLAYING</ListItemText></ListItem>
          </Link>
          <Link className='Link' to="/movies/upcoming/">
            <ListItem><ListItemText><Icon strategy="ligature" use="star"/>UPCOMING</ListItemText></ListItem>
          </Link>
          <Link className='Link' to="/movies/search/">
            <ListItem><ListItemText><Icon strategy="ligature" use="star"/>SEARCH</ListItemText></ListItem>
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