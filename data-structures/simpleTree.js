class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  addNode(parentNode, value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else if (parentNode) {
      parentNode.children.push(newNode);
    }
    return newNode;
  }
};

const tree = new Tree();

tree.addNode(
  new Node(1),
  2,
);

console.log(tree);
