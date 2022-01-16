/**
 * 100 80 60 70 60 75 85
 *
 * expctd op
 * 1    1   1  2 1 4  6
 *
 */
let Stack = require("./stack");
let stack = new Stack.Stack();
let a = [100, 80, 60, 70, 60, 75, 85];
let res = [],
  index = [];
let _ = require("lodash");
//arr, ans, stack
/**
 * for i of a
 * stock span for each elem=a[i]-index(NGL)
 */
function NGL(a) {
  for (let i = 0; i < a.length; i++) {
    if (!_.get(stack.top(), "0")) {
      res.push(-1);
      index.push(-1);
    } else if (_.get(stack.top(), "0") > a[i]) {
      //  console.log(_.get(stack.top(), "0"), ">", a[i]);
      res.push(_.get(stack.top(), "0"));
      index.push(_.get(stack.top(), "1"));

      //  console.log(res);
    } else {
      while (_.get(stack.top(), "0") < a[i]) {
        stack.pop();
      }
      if (stack.empty()) {
        res.push(-1);
        index.push(-1);
      } else {
        res.push(_.get(stack.top(), "0"));
        index.push(_.get(stack.top(), "1"));
      }
    }
    stack.push([a[i], i]);
  }
  //   console.log(stack);
  //console.log("res", res);
  console.log(index);
  return index;
}
function stockSpan() {
  let indexArr = NGL(a);
  let ans = [];
  for (let i = 0; i < a.length; i++) {
    ans.push(i - indexArr[i]);
  }
  console.log("ans", ans);
  return ans;
}
stockSpan();
