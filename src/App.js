import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";

const App = () => {
  if (window.location.pathname === "/") {
    window.location.pathname = "/apps";
  }

  if (!window.location.search) {
    window.location.search = "page=1";
  }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/apps" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
