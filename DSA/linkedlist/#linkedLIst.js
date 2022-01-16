//////////////// class approach ///////////////////////////
/**\
 * in class the function is declared without let and cost fnName=function(){}
 */
// create node
class Node {
  constructor(data, next = null) {
    this.element = data;
    this.next = next;
  }
}

//Linked list:-length === 0 , head=null(as length is 0 head points to nothing same for tail )
//head and current pointers, head=>first node pf LL, current=>dynamic value
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  ///append:-(since singly only at the end)
  append(data) {
    //create new node for appending
    let newNode = new Node(data);

    //check in linked list and append
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  ///remove from any position
  /**
   * current , previous and index are temps used for tracking, head is the default prop
   *
   */
  removeNode(pos) {
    //valid case pos{0,length}
    if (pos > -1 && pos < this.length) {
      let current = this.head,
        prev,
        index = 0;
      if (pos == 0) {
        current = this.head;
        this.head = current.next;
      } else {
        while (index++ < pos) {
          //agar 3 ko remove karana hai to 2 current hai usko prev kardo current.
          prev = current;
          current = current.next;
        }
      }
      this.length--;
      return current.value;
    } else {
      return null;
    }
  }
  //
}
let node1 = new Node("first");
let node2 = new Node("second");

let L1 = new LinkedList();
console.log(L1);
console.log("----------------L1------------------");
L1.append(node1);
console.log(L1);
L1.append(node2);
console.log(node1.next);
console.log(L1);
