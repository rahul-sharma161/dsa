function LL() {
  return;
}
function Stack() {
  this.stackList = new LL();
}

Stack.prototype.push = function (data) {
  this.stackArr.push(data);
  this.length++;
};
Stack.prototype.push = function (data) {
  this.length--;
  return this.stackArr.pop(data);
};
Stack.prototype.peek = function () {
  return this.stackArr[this.length];
};

let a = [];
a.push(1, 3);
a.push(5);
console.log(a);
let s1 = new Stack();
console.log(s1);
console.log(s1.peek());
