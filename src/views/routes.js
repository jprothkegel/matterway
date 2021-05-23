import React from "react";
import { Switch, Route } from "react-router-dom";
import { HOME_ROUTE, BOOK_ROUTE } from "../constants/routes";
import Search from "./Search";
import Book from "./Book";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME_ROUTE}>
        <Search />
      </Route>
      <Route exact path={BOOK_ROUTE}>
        <Book />
      </Route>
    </Switch>
  );
};

export default Routes;
