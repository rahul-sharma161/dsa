class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
}
let s1 = new Stack();
Stack.prototype.push1 = function (data) {
  this.arr.push(data);
};
Stack.prototype.pop1 = function (data) {
  this.arr.pop();
};
Stack.prototype.push2 = function (data) {
  this.arr.unshift(data);
};
Stack.prototype.push = function (data) {
  this.arr.shift();
};
