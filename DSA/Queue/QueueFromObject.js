class Queue{
    constructor(){
        this.items = {};
        this.front=0;
        this.rear=0;
    }
    isEmpty(){
        return this.rear - this.front === 0;
    }
    getSize(){
        return this.rear - this.front;
    }
    peek(){
        return this.items[this.front]
    }
    print(){
        const queueValues=[];
        for(let i = this.front;i<this.rear;i++){
            queueValues.push(this.items[i])
        }
        console.log(queueValues)
    }
    enqueue(value){
        this.items[this.rear] = value;
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()){
            return `Queue is Empty`
        }
        const item = this.items[this.front];
        delete this.items[this.front]
        this.front++
        return item
    }
}