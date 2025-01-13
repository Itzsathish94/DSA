class Stack{
    constructor(){
        this.items=[];
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0
    }
    getSize(){
        return this.items.length;
    }
    print(){
        if(this.isEmpty()){
            console.log('Stack is empty')
        }
        else{
            console.log(this.items.join(', '))
        }
    }
}