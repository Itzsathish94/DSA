class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
    addToFront(value){
        const NODE = new Node(value);
        if(this.isEmpty()){
            this.front = NODE;
            this.rear=NODE;
        }
        else{
            NODE.next = this.front;
            this.front.prev = NODE;
            this.front=NODE;
        }
        this.size++
    }
    addToRear(value){
        const NODE = new Node(value);
        if(this.isEmpty()){
            this.front = NODE;
            this.rear=NODE;
        }
        else{
            NODE.prev = this.rear;
            this.rear.next = NODE;
            this.rear = NODE;
        }
        this.size++
    }
    removeFromFront(){
        if(this.isEmpty()){
            return `Queue is Empty`
        }
        else{
            let removedNode = this.front;
            this.front = this.front.next;
            if(this.front){
                this.front.prev=null;
            }
            else{
                this.rear=null;
            }
            this.size--
            return removedNode.value;
        }
    }
    removeFromRear(){
        if(this.isEmpty()){
            return `Queue is Empty`
        }
        else{
        let removedNode = this.rear;
        this.rear = this.rear.prev;
        if(this.rear){
            this.rear.next = null;
        }
        else{
            this.front = null;
        }
        this.size--
        return removedNode.value;
        }
    }

    peekFront(){
        if(this.isEmpty()){
            return `Queue is Empty`
        }
        else{
            return this.front.value;
        }
    }

    peekRear(){
        if(this.isEmpty()){
            return `Queue is Empty`
        }
        else{
            return this.rear.value;
        }
    }

    display(){
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        let curr = this.front;
        let dequeValues = "";
        while (curr) {
            dequeValues += `${curr.value} `;
            curr = curr.next;
        }
        return dequeValues.trim();
    }
}