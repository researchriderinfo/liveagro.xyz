import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
