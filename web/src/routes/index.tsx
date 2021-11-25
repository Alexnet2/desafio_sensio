import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Companies, CompaniesAdd, CompaniesView } from "../pages";
const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Companies} />
      <Route path="/add" component={CompaniesAdd} />
      <Route path="/view" component={CompaniesView} />
    </Switch>
  );
};

export default Routes;
