class Node{
    constructor(value){
        this.value = value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
    enqueue(value){
        const NODE = new Node(value);
        if(this.isEmpty()){
            this.front = NODE;
            this.rear=NODE;
        }
        else{
            this.rear.next = NODE;
            this.rear= NODE;
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return `Queue is empty`
        }
        else{
            const POPPED_VALUE=this.front.value;
            this.front=this.front.next;
            this.size--
            return POPPED_VALUE;
        }
    }
    peek(){
        return this.front.value;
    }
    display(){
        if(this.isEmpty()){
            return `Queue is empty`;
        }
        else{
            let curr= this.front;
            let queueValues = '';
            while(curr){
                queueValues +=`${curr.value} `;
                curr = curr.next;
            }
           return queueValues.trim()
        }
    }
    search(value){
        if(this.isEmpty()){
            return `Queue is empty`;
        }
        let curr=this.front;
        let index=0;
        while(curr){
            if(curr.value===value){
                return index
            }
            curr=curr.next;
            index++
        }
        return -1
    }
    removeByValue(value){
        if(this.isEmpty()){
            return `queue is empty`;
        }
        if(this.front.value===value){
            return this.dequeue();
        }
        let curr = this.front;
        while(curr&&curr.next){
            if(curr.next.value===value){
                let removedNode = curr.next;
                curr.next = removedNode.next;
                if(removedNode===this.rear){
                    this.rear=null;
                }
                this.size--
                return removedNode.value;
            }
            curr = curr.next;
        }
        return null
    }
    contains(value){
        if(this.isEmpty()){
            return `Queue is empty`;
        }
        else{
            let curr = this.head;
            while(curr){
                if(curr.value===value){
                    return true
                }
                curr = curr.next;
            }
            return false
        }
    }

    clone(){
        const NEW_QUEUE = new Queue();
        let curr = this.head;
        while(curr){
            NEW_QUEUE.enqueue(curr.value);
            curr = curr.next;
        }
        return NEW_QUEUE
    }

    clear(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    convertToArray(){
        const ARR =[];
        let curr = this.head;
        while(curr){
            ARR.push(curr.values);
            curr = curr.next;
        }
        return ARR;
    }

    reverse(){
        if(this.isEmpty()){
            return `Queue is empty`
        }
        else{
            let prev=null;
            let curr = this.front;
            this.rear = this.front;
            while(curr){
                let next = curr.next;
                curr.next = prev;
                prev = curr
                curr = next;
            }
            this.front = prev
        }
    }

}

const QUEUE = new Queue()

console.log(QUEUE.isEmpty())
QUEUE.enqueue(1)
QUEUE.enqueue(12)
QUEUE.enqueue(13)
QUEUE.enqueue(14)
QUEUE.enqueue(15)
QUEUE.enqueue(16)
QUEUE.enqueue(17)
QUEUE.print()
QUEUE.dequeue()
QUEUE.print()
console.log(QUEUE.search(14))
