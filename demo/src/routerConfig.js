import {
  resolve
} from "url";

let str = './App'

let str1 = `./App`

console.log(str1)

let array = [];
array.push({
  path: '/',
  component: resolve => require([`${str}`], resolve)
})



export default array
