import React from 'react';


let About =  (props) => {
  return (
    <div>
      <h1 className="text-center">關於</h1>
      <p>這是一個使用 React 開發的天氣查詢網站</p>
      <p>相關技術如下：</p>
      <ul className="">
        <li>
          <a href="https://facebook.github.io/react/">React</a> | A JavaScript Library for Building UI
        </li>
        <li>
          <a href="https://github.com/ReactTraining/react-router">react-router</a> | Declarative routing for React. Essential for Single Page Applications.
        </li>
        <li>
          <a href="https://github.com/mzabriskie/axios">axios</a> | Promise-based HTTP client for the browser and node.js.
        </li>
      </ul>
    </div>
  );
};


module.exports = About;
