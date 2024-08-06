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
    

    <Footer slogan="Precision Tools, Unmatched Service" logoSrc="/assets/wg_lg_tl_stk_4cp_pos.jpg" logoAlt="Company Logo" />
  </div>
);

export default Layout;
