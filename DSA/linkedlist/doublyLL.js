const { tail } = require("lodash");

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

//sll only has head ->unidirectional; dll head, tail-> bidirectional
class DoublyLL {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  append = function (data) {
    //to add at tail
    /**
     * create the node, check the dll
     * if head==null
     *    insert at head
     * else traverse till tail and append
     */
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      //this has to avoided as doubly has a tail as well.
      //   while (current.next) {
      //     current = current.next;
      //   }
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  };

  insertAt = function (position, element) {
    /**
     * if pos=0
     *  if dll.length=0 attach else shift and attach
     * if pos>dll.length return
     * if pos==dll.length attach
     * else traverse shift and attach
     */
    let newNode = new Node(element);
    if (position > this.length) {
      return null;
    } else if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (position == this.length) {
    }
  };

  removeAt = function () {};
}
let newNode = new Node(5);
let dll = new DoublyLL();

dll.append(newNode);
dll.append(10);
dll.append(15);
dll.append(20);
dll.insertAt(0, 100);

console.log(dll.head);
