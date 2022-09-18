import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-native";
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "../../Components/Icon";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer
} from "@material-ui/core";

const items1 = [
  { id: "home", title: "Home", icon: "home", link: "/" },
  { id: "schedule", title: "Schedule", icon: "event", link: "/schedule" }
];
const items2 = [
  { id: "profile", title: "Profile", icon: "badge", link: "/profile" }
];
const styles = (theme) => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const DrawerComponent = (props) => {
  const { classes } = props;

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
    >
      <div style={{ padding: "15px 15px 10px 15px" }}>
        <Image
          style={{
            height: 38,
            resizeMode: "contain"
          }}
          source={{
            uri: "../../keytech.png"
          }}
        />
      </div>

      <div style={{ padding: "0px 15px 0 15px" }}>
        <List>
          {items1.map((text, index) => (
            <Link to={text.link} style={{ textDecoration: "none" }}>
              <ListItem button key={text.title}>
                <ListItemIcon>
                  <Icon
                    size={32}
                    icon={text.icon}
                    style={{ marginBottom: "5px" }}
                    type="color"
                  />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {items2.map((text, index) => (
            <Link to={text.link} style={{ textDecoration: "none" }}>
              <ListItem button key={text.title}>
                <ListItemIcon>
                  <Icon
                    size={32}
                    icon={text.icon}
                    style={{ marginBottom: "5px" }}
                    type="color"
                  />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <Drawer open={props.open} onClose={props.toggleDrawerHandler}>
      {sideList()}
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComponent);
