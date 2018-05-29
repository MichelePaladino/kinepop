import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";


import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";

import { Typography } from "rmwc/Typography";
import { Icon } from 'rmwc/Icon';


import { closeSideDrawer } from "../store/actions/uiActions"

class SideDrawer extends Component {
  // shouldComponentUpdate(nextProps) {
  //   return this.props.ui.sideDrawer !== true;
  // }

  componentDidUpdate() {
    console.log("from sideDrawer.js --> componentDidUpdate")
  }

  render () {
    // if(this.props.ui.sideDrawer === false) {
    //   return null;
    // }
    console.log("from sideDrawer.js --> render()")
    return (
      <Drawer
        temporary
        open={this.props.ui.sideDrawer}
        // onClose={(e) => this.props.closeSideDrawer(e)}
        onClick={(e) => this.props.closeSideDrawer(e)}
        className="Drawer"
      >
        {/* <DrawerHeader><Typography use="headline4" tag="h2">TITOLO</Typography></DrawerHeader> */}
        <DrawerContent className="Drawer__Content">
          <Link className='Link' to="/movies/latest/">
            <ListItem><ListItemText><Icon strategy="ligature" use="star" />Latest</ListItemText></ListItem>
          </Link>
          <Link className="Link" to="/">
            <ListItem><ListItemText>Go to the LandingPage</ListItemText></ListItem>
          </Link>
          <Link className="Link" to="/movies/popular/">
            <ListItem><ListItemText>Go to Popular Movies</ListItemText></ListItem>
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