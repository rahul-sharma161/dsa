let a = [];
console.log("a:-", a, "a[0]:-", a[0]);
a.push(10);
console.log("a:-", a, "a[0]:-", a[0], a[1], a[2]);
a.push(20);
console.log("a:-", a, "a[0]:-", a[0], a[1], a[2]);
a.push(30);
console.log("a:-", a, "a[0]:-", a[0], a[1], a[2]);
a.pop();
console.log("a:-", a, "a[0]:-", a[0], a[1], a[2]);

class Stack {
  constructor() {
    this.Stack = [];
    this.length = 0;
  }
}
