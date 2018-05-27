import React from "react";

import { Drawer, DrawerHeader, DrawerContent } from "rmwc/Drawer";

import { ListItem, ListItemText } from "rmwc/List";

const sideDrawer = ({state, toggle}) => {
  return (
    <Drawer
      temporary
      open={state}
      onClose={() => toggle()}
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
  );
};

export default sideDrawer;
