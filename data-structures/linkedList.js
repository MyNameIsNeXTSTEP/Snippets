function Node(val) {
  const context = this;
  this.val = val;
  this.next = null;
  this.updateNext = function(nextVal) {
    if (!nextVal) return context;
    context.next = nextVal;
    return context;
  };
};

const node = new Node(1);

console.log(node.updateNext('null'));
