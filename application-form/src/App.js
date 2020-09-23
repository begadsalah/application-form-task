import React from "react";
import "./App.css";
import LeadPage from "./components/LeadPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Application from "./components/Application.js";
import ConfirmationPage from "./components/ConfirmationPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/confirmation">
            <ConfirmationPage />
          </Route>
          <Route path="/Application">
            <Application />
          </Route>
          <Route path="/">
            <LeadPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
