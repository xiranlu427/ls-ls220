class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  peek() {
    // Returns the value of the top most element without removing it.
    if (this.top) {
      return this.top.val;
    } else {
      // If the stack is empty, it returns `null`.
      return null;
    }
  }

  push(value) {
    // Adds an item to the stack
    const newNode = new ListNode(value, this.top);
    this.top = newNode;
  }

  pop() {
    // Removes the item from the stack and returns it
    if (this.top) {
      const popped = this.top;
      this.top = this.top.next;
      return popped.val;
    } else {
      // If the stack is empty, it returns `null`.
      return null;
    }
  }
}

const myStack = new Stack();
myStack.push(1);
console.log('Top element:', myStack.peek());  // logs 'Top element: 1'
myStack.push(2);
console.log('Top element:', myStack.peek());  // logs 'Top element: 2'
myStack.push(3);
console.log('Top element:', myStack.peek());  // logs 'Top element: 3'
myStack.pop();
console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 2'
myStack.pop();
console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 1'
myStack.pop();
console.log('Peek on empty stack:', myStack.peek());    // logs 'Peek on empty stack: null'