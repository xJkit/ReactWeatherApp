import React from 'react'
import {Link} from 'react-router'

let Examples = (props) => (
  <div>
    <h1 className="text-center page-title">查詢範例</h1>
    <p>這裡有一些城市的範例供你參考：</p>
    <ol>
      <li>
        <Link to="/?location=Taiwan">Taiwan, TW</Link>
      </li>
      <li>
        <Link to="/?location=California">California, CA</Link>
      </li>
    </ol>
  </div>
)

module.exports = Examples;
