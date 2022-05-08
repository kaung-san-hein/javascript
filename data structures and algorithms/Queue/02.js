class PriorityQueue {
  collection = [];

  print = () => console.log(this.collection);

  enqueue = (element) => {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  };

  dequeue = () => this.collection.shift();

  front = () => this.collection[0];

  size = () => this.collection.length;

  isEmpty = () => this.collection.length === 0;
}

let pq = new PriorityQueue();
pq.enqueue(["a", 3]);
pq.enqueue(["b", 2]);
pq.enqueue(["c", 1]);
pq.print();
