class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearch {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = this.root;
    if (!node) {
      this.root = new Node(data);
    } else {
      const searchBinaryTree = function (node) {
        if (data < node.data) {
          if (!node.left) {
            node.left = new Node(data);
          } else {
            searchBinaryTree(node.left);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
          } else {
            searchBinaryTree(node.right);
          }
        } else {
          return null;
        }
      };
      searchBinaryTree(this.root);
    }
  }
  findMin() {
    let currentNode = this.root;
    while (currentNode?.left) {
      currentNode = currentNode?.left;
    }
    return currentNode?.data;
  }
  findMax() {
    let currentNode = this.root;
    while (currentNode?.right) {
      currentNode = currentNode?.right;
    }
    return currentNode?.data;
  }
}
const binarySearch = new BinarySearch();
binarySearch.add(10);
binarySearch.add(12);
binarySearch.add(8);
binarySearch.add(11);
binarySearch.add(13);
binarySearch.add(2);
console.log(binarySearch.findMin());
console.log(binarySearch.findMax());
