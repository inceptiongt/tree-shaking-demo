// // goog.provide('main')
// // goog.require('util')
// // goog.require('menu')

import {post} from './util.js'
import menu from './menu.js'
import {V8Engine} from './v'
import { cube } from './maths.js';
console.log( cube( 5 ) ); // 125

let baz = () => {
  // post()
  var x = 1
  console.log(x)
  function unused () {
    return 5
  }
  return x
}

baz()


console.log(new V8Engine().toString())
// import { Table } from "antd";

// console.log("table111",Table)

