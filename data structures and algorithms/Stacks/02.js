class Stack {
  count = 0;
  storage = {};

  // Adds a value onto the end of the stack
  push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  pop = () => {
    if (this.count === 0) {
      return null;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  size = () => {
    return this.count;
  };

  // Returns the value at the end of the stack
  peek = () => {
    return this.storage[this.count - 1];
  };
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
