import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Wrapper } from "./Root.styles";
import { UserDetails } from "./UserDetails";

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users/:username">
                <UserDetails />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
