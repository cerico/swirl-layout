import React from "react";
import { connect } from "react-redux";
const classNames = require("classnames");
import styles from "./products.css";
import Card from "hello-cards";

import ProductItem from "./ProductItem";

class Products extends React.Component {
  render() {
    console.log(this.props);
    let display;
    this.props.location.pathname === "/"
      ? (display = "flex")
      : (display = "flex");

    const style = {
      general: {
        display: display,
        background: this.props.colour || "#7aa7c1",
        paddingTop: "5%",
        height:'100vh',
        color:'#f9f7ee',
        fontSize:'44px'
      }
    };

    return (
      <div className={styles.grid} style={style.general}>
        content goes here
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, null)(Products);
