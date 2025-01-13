class circularQueue{
    constructor(size){
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }

    isEmpty(){
        return this.front === -1;
    }

    isFull(){
        return (this.rear+1)%this.size === this.front;
    }

    enqueue(value){
        if(this.isFull()){
            return `Queue is full`;
        }
        if(this.front===-1){
            this.front=0;
        }
        this.rear = (this.rear+1)%this.size;
        this.queue[this.rear]=value;
    }

    dequeue(){
        if(this.isEmpty()){
            return `Queue is empty`;
        }
        const item = this.queue[this.front];
        if(this.front === this.rear){
            this.front = -1;
            this.rear = -1;
        }
        else{
            this.front = (this.front+1)%this.size;
        }
        return item
    }

    peek(){
        if(this.isEmpty()){
            return `Queue is empty`;
        }
        else{
            return this.queue[this.front];
        }
    }

    print(){
        if(this.isEmpty()){
            return `Queue is empty`;
        }
        let curr = this.front;
        const queueValues=[];
        while(true){
            queueValues.push(this.queue[curr]);
                if(curr===this.rear) break;
                curr = (curr+1)%this.size;
        }
        console.log(queueValues)
    }
}