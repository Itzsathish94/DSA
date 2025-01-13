////////////remove middle element/////////////////
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeMid(){
        if(this.isEmpty()){
            return null;
        }
        let mid = Math.floor(this.size / 2);

        if(this.size === 1){
            let removedValue = this.head.value;
            this.head = null;
            this.size--;
            return removedValue;
        }
    
        let prev = this.head;
        let removedNode;
    
        for(let i = 0; i < mid - 1; i++){
            prev = prev.next;
        }
        if(mid === 0){
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }
    
    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }
        else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues+=`${curr.value} `
                curr = curr.next
            }
            console.log(listValues) 
        }
    }
}

const list = new LinkedList()


list.prepend(1)
list.prepend(12)
list.prepend(31)
list.prepend(451)
list.prepend(51)
list.print()
list.removeMid()
