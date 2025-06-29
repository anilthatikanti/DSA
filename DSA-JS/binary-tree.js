class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        var current = this.root;
        while (true) {
          if (value < current.value) {
            if (current.left === null) {
              current.left = new Node(value);
              return this;
            } else {
              current = current.left;
            }
          } else if (value > current.value) {
            if (current.right === null) {
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
        }
      }
    }
    findMin(node){
        if(!node) return null
        while(node.left){
            node = node.left
        }
        return node
    }
  
    remove(value) {
       if(!this.root) return undefined;
       let current = this.root;
       let parent = null;
       while(current){
           if(current.value<value){
               parent = current;
               current = current.right
           }else if(current.value>value){
               parent = current;
               current = current.left
           }else{
               if(!current.left && !current.right){
                   if(!parent) this.root = null;
                   else if(parent.left === current) parent.left = null;
                   else parent.right = null
               }else if(!current.left || !current.right){
                   let child = current.left || current.right
                   if(!parent) this.root = child;
                   else if(parent.left === current) parent.left = child;
                   else parent.right = child
               }else{
                   let rightMinNode = this.findMin(current.right)
                   let value = rightMinNode.value;
                   this.remove(value)
                   current.value = value
               }
               return true
           }
          
       }
       return false
  
    }
    isBalanced(node = this.root) {
        if(!node) return true
        function height(n){
            if(!n) return 0;
            return 1 + Math.max(height(n.left),height(n.right))
        }
        
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);
        if(Math.abs(leftHeight-rightHeight)>1) return false
        return this.isBalanced(node.left) &&  this.isBalanced(node.right)
      }
  }