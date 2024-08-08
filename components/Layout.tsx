import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div style={{width:'100vw'}} >
    <Header />
    <div className="layout">{props.children}</div>
    

    <Footer slogan="Precision Tools, Unmatched Service" logoSrc="/assets/image.png" logoAlt="Company Logo" />
  </div>
);

export default Layout;
