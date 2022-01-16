function Stack() {
  this.s = [];
  //this.length = 0;
}
Stack.prototype.push = function (data) {
  this.s.push(data);
  //this.s.length++;
};
Stack.prototype.pop = function (data) {
  return this.s.pop(data);
};
Stack.prototype.top = function (data) {
  return this.s[this.s.length - 1];
};
Stack.prototype.length = function () {
  return this.s.length;
};
Stack.prototype.empty = function () {
  if (this.s.length === 0) {
    // console.log(this.s)
    return true;
  } else {
    //  console.log("false case",this.s)

    return false;
  }
};
// console.log(new Stack());
module.exports = {
  Stack,
};
