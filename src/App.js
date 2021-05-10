import React from "react";
import "./App.css";
import ReactWhatsapp from "react-whatsapp";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/b">
            <Basket />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
