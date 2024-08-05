import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div >
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      

      body {
        overflow-x:hidden; 
        margin: 0;
        padding: 0;
        // font-size: 16px;
        max-width:100% ; 
        
        // background: rgba(0, 0, 0, 0.05);
      }

      // input,
      // textarea {
      //   font-size: 16px;
      // }

      button {
        cursor: pointer;
      }
    `}</style>
    {/* <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style> */}
    <Footer slogan="Precision Tools, Unmatched Service" logoSrc="/assets/wg_lg_tl_stk_4cp_pos.jpg" logoAlt="Company Logo" />
  </div>
);

export default Layout;
