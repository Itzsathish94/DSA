class QueueFromArray{
    constructor(size){
        this.queue = new Array(size);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }

    enqueue(value){
        if(this.size===this.queue.length){
            return `Queue is full`
        }
        this.rear++
        this.queue[this.rear]=value;
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return `Queue is empty`
        }
        const value = this.queue[this.front]
        this.front++
        this.size--
        return value
    }

    peek(){
        if(this.isEmpty()){
            return `Queue is empty`
        }
        return this.queue[this.front];
    }
}