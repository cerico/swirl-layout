import React, { Component } from "react";
import Sidebar from "./sidebar";
import styles from "./layout.css";
import Header from "./header";
import Swirl from "./swirl";

// import { changeSideText } from '../../actions/products';

const classNames = require("classnames");

class Layout extends Component {
  showContent() {
    return (
      <div className={styles.container}>
        <Header links={this.props.links} />
        <Swirl fill={this.props.colour}/>
      </div>
    );
  }

  render() {
    return this.showContent();
  }
}

export default Layout;
