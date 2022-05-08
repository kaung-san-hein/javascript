class Queue {
  collection = [];

  print = () => console.log(this.collection);

  enqueue = (element) => this.collection.push(element);

  dequeue = () => this.collection.shift();

  front = () => this.collection[0];

  size = () => this.collection.length;

  isEmpty = () => this.collection.length === 0;
}

let queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();
