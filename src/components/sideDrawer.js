import React, { Component } from "react";
import { connect } from "react-redux";

import { startSetLatestMovies, startSetSearchMovie, startSearchMoreMovie, resetPage } from "../store/actions/moviesActions";
import { startToggleSideDrawer } from "../store/actions/uiActions"

import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText } from "rmwc/List";


class SideDrawer extends Component {

  render () {
    console.log("SideDrawer.js || render()")
    return (
      <Drawer
        temporary
        open={this.props.ui.sideDrawer}
        onClose={() => this.props.startToggleSideDrawer()}
      >
        <DrawerHeader>DummyHeader</DrawerHeader>
        <DrawerContent>
          <ListItem>
            <ListItemText>1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>2</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>3</ListItemText>
          </ListItem>
        </DrawerContent>
      </Drawer>
    )
  }
}


// const sideDrawer = ({state, toggle}) => {
//   return (
//     <Drawer
//       temporary
//       open={state}
//       onClose={() => toggle()}
//     >
//       <DrawerHeader>DummyHeader</DrawerHeader>
//       <DrawerContent>
//         <ListItem>
//           <ListItemText>1</ListItemText>
//         </ListItem>
//         <ListItem>
//           <ListItemText>2</ListItemText>
//         </ListItem>
//         <ListItem>
//           <ListItemText>3</ListItemText>
//         </ListItem>
//       </DrawerContent>
//     </Drawer>
//   );
// };


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

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)