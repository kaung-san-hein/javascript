class MySet {
  // the collection will hold the set
  collection = [];
  // this method will check for the presence of an element and return true or false
  has = (element) => {
    return this.collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  values = () => this.collection;
  // this method will add an element to the set
  add = (element) => {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from the set
  remove = (element) => {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the collection
  size = () => this.collection.length;
  // this method will return the union of two sets
  union = (otherSet) => {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set
  intersection = (otherSet) => {
    let intersectionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  difference = (otherSet) => {
    let differenceSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  subset = (otherSet) => {
    let firstSet = this.values();
    return firstSet.every((e) => otherSet.has(e));
  };
}

let setA = new MySet();
let setB = new MySet();
setA.add("a");
setA.add("e");
setB.add("b");
setB.add("c");
setB.add("d");
setB.add("a");
console.log(setA.subset(setB));
