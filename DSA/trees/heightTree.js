class Node {
  constructor(value) {
    this.key = value;
    this.left = this.right = null;
  }
  logger() {
    console.log("i am printing a class");
  }
}

//instead of using a class
function treeNode(value) {
  this.value = value;
  this.right = this.left = null;
}

let a = new treeNode(5);
// console.log(a);
treeNode.prototype.logger = function (a) {
  console.log("i am using a prototype", a);
};

// a.logger(a);
var root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
console.log(root);

function height(root) {
  if (root == null) return 0;
  else {
    return 1 + Math.max(height(root.left), height(root.right));
  }
}
console.log(height(root));
