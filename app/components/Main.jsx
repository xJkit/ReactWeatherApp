import React from "react";
import Nav from "Nav";


const Main = (props) => {
  return(
    <div>
    <Nav />
    {props.children}
    </div>
  );
}

module.exports = Main;
