// LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array.

class LinkedList {
  insertAt(element, index) {
    if (index < 0 || index < this.size)
      return console.log("Please enter a valid index");
    else {
      let node = new Node(element);
      let curr, prev;

      curr = this.head;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;

        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
    example = new LinkedList();
  }
}

console.log(LinkedList)