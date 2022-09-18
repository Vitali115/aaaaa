import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Schedule from "./Components/Schedule";
import Profile from "./Components/Profile";
import "devextreme/dist/css/dx.light.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faHome,
  faShoppingBasket,
  faCalendar,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";
import { CssBaseline } from "@material-ui/core";
import COLORS from "./Models/Colors";
import "./Styles/App.css";

library.add(faCoffee, faHome, faShoppingBasket, faCalendar, faClipboardCheck);

const Container = styled.div`
  background-color: ${COLORS.mainBackground};
  width: 100vw;
  padding-bottom: 50px;
`;

export default function App() {
  return (
    <Container>
      <Router>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route id="login" exact path="/login" component={Login} />
          <Route id="dashboard" exact path="/" component={Dashboard} />
          <Route id="profile" exact path="/profile" component={Profile} />
          <Route
            id="schedule"
            exact
            path="/schedule/:id"
            component={Schedule}
          />
        </Switch>
      </Router>
    </Container>
  );
}
