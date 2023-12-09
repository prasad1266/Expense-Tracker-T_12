import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  console.log(props.children.props);
  //instead of props.children
  return (
    <div>
      <Header></Header>
      <div className="content">{props.children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
