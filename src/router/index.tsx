import React from "react";
import { IRouterProps } from "../interfaces";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Store Provider
import { StoreProvider } from "../store";

// Components
import { Nav, Home, Movie } from "../components/";

const Router: React.FunctionComponent<IRouterProps> = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default Router;
