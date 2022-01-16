class Node {
  constructor(value) {
    this.key = value;
    this.left = this.right = null;
  }
}

var root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(3);
root.right = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
//console.log(root);

function inOrder(root) {
  //console.log(root);
  if (root == null) {
    return;
  }
  inOrder(root.left);
  console.log("node's key", root.key);
  inOrder(root.right);
}
console.log("inorder--->");
inOrder(root);
console.log("<---inorder");

function preOrder(root) {
  //console.log(root);
  if (root == null) {
    return;
  }
  preOrder(root.left);
  preOrder(root.right);
  console.log("node's key", root.key);
}
console.log("preOrder--->");
preOrder(root);
console.log("<---preOrder");
