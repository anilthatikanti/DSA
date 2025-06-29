class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0
    }
    push(value){
        let node = new Node(value);
        if(!this.length){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail
            this.tail.next = node;
            this.tail = this.tail.next
        }
        ++this.length
        return this
    }
    pop(){
        if(!this.length) return undefined
        let removeTail = this.tail
        if(this.length==1){
            this.head = null;
            this.tail = null
        }else{
            this.tail = removeTail.prev
            this.tail.next = null;
        }
        --this.length;
        return removeTail
    }
    shift(){
        let removeNode = this.head;
        if(!this.length) return undefined
        --this.length;
        if(!this.length){
            this.head = null;
            this.tail= null
        }else{
            this.head = removeNode.next;
            this.head.prev = null
            removeNode.next = null;
        }
        return removeNode
    }
    unshift(value){
        let node = new Node(value);
        if(!this.length){
            this.head = node;
            this.tail = node;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node
        }
        ++this.length;
        return this
    }
    get(index){
        if(index<0||this.length<=index) return undefined
        let current = index<=(this.length/2)?this.head:this.tail
        let length = index<=(this.length/2) ? 0:this.length
        if(!length){
            while(length<index){
                current = current.next;
                ++length
            }
        }else{
            while(index>length){
                current = current.prev;
                --length
            }
        }
        return current
    }
    
    set(index,value){
        let current = this.get(index)
        if(!current) return false
        current.value = value
        return true
    }
    
    insert(index,value){
        if(index<0||this.length<index) return undefined
        let node = new Node(value);
        if(index ===0) return this.unshift(value)
        else if(index === this.length) return this.push(value) 
        let current = this.get(index-1)
        let next = current.next
        current.next = node;
        node.prev = current;
        node.next = next
        ++this.length
        return true
    }
    remove(index){
        if(index<0||this.length<=index) return false
        if(index === 0) return this.shift()
        else if(index===this.length) return this.pop()
        let current = this.get(index)
        current.prev.next = current.next;
        current.next.prev = current.prev
        current.next= null
        current.prev= null
        --this.length
        return true
    }
    reverse(){
        let current = this.head;
        let temp;
        while(current){
            temp = current.prev;
            current.prev = current.next
            current.next = temp;
            current = current.prev
        }
        if(temp){
            this.tail  = this.head;
            this.head = temp.prev
        }
    
    }
    print(){
        let arr = [];
        let cur = this.head
        while(cur){
            arr.push(cur.value)
            cur = cur.next
        }
        return arr
    }
}
let doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.push(4).push(5).push(10).push(15)
// doubleLinkedList.shift()
// doubleLinkedList.unshift(3)
console.log(doubleLinkedList.insert(4,1))
console.log(doubleLinkedList.remove(2))
console.log(doubleLinkedList.print())