import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { UserDetails } from "./UserDetails";

const Root: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users/:username">
                <UserDetails />
              </Route>
            </Switch>
          </div>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
