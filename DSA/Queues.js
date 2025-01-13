class Node{
    constructor(value){
        this.value = value
        this.next  = null
    }
}

class Queue{
    constructor(){
        this.head=null
        this.tail = null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else if (this.search(value) !== -1) {
            console.log(`Value ${value} already exists in the queue.`);
            return; 
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        else{
            let removednode = this.head
            this.head = removednode.next
            this.size--
            if (this.isEmpty()) {  
                this.tail = null;
            }
            return removednode.value
        }

    }

    search(value){
        let curr = this.head
        let index = 0
        while(curr){
            if(curr.value===value){
                return `Value found at Index : ${index}`
            }
            curr = curr.next
            index++
        }
        return `Value ${value} not found in the queue`
    }

    print(){
        if(this.isEmpty()){
            console.log(`Queue is empty`)
        }
        else{
            let curr = this.head
            let queueValues = ''
            while(curr){
                queueValues +=`${curr.value} `
                curr = curr.next
            }
            console.log(queueValues)
        }
    }
}

let queue = new Queue()