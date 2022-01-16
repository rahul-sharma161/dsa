class treeNode {
  constructor(value) {
    this.key = value;
    this.left = this.right = null;
  }
}

// class tree {
//   constructor(root = null) {
//     this.root = root;
//   }
// }

//creating a root
var root = null;

//assign val to root

root = new treeNode(1);

root.left = new treeNode(2);
root.right = new treeNode(3);

console.log(root);
