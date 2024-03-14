import React from "react";
import "../resources/default-layout.css";
const DefaultLayout = (props) => {
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">SHEY MONEY</h1>
        </div>
        <button className="primary">username</button>
        {/* <div>
          <Dropdown overlay={menu} placement="bottomLeft">
          </Dropdown>
        </div> */}
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
