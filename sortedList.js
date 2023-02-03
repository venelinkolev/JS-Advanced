// function sortedList() {
//   console.log();
// }

// sortedList();
// sortedList();

// · add(element) - adds a new element to the collection
// · remove(index) - removes the element at position index
// · get(index) - returns the value of the element at position index
// · size - number of elements stored in the collection

class List {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }

  add(element) {
    this.list.push(element);
    this.list.sort((a, b) => a - b);
    this.size++;

    return this.list;
  }

  remove(index) {
    if (index >= 0 && index < this.size) {
      this.list.splice(index, 1);
      this.size--;

      return this.list;
    }
  }

  get(index) {
    if (index >= 0 && index < this.size) {
      return this.list[index];
    }
  }
}

let list = new List();

list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
