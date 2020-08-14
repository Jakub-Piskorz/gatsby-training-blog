import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import layoutStyles from "./layout.module.scss";

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <main className={layoutStyles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
