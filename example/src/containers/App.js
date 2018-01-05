import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const classNames = require("classnames");

import Layout from "swirl-layout";
import Products from "../components/Products";
import About from "../components/About";
import { getProducts } from "../actions/Products";

class App extends React.Component {
  render() {
    const links = [
      { path: "/", title: "home", key: 1 },
      { path: "/about", title: "about", key: 2 }
    ];
    const colour = "#7aa7c1"

    return (
      <Router>
        <main>
          <Layout links={links} colour={colour}/>
          <div style={{'background':colour}}>
            <Switch>
              <Route exact path="/" colour={colour} component={Products} />
              <Route exact path="/about" colour={colour} component={About} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { getProducts })(App);
