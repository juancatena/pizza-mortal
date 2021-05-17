import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import SingleItem from "./components/SingleItem";

function App({ currentItem }) {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Home} />
        <Route exact path="/b" component={Basket} />
        <Switch>
          {!currentItem ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
