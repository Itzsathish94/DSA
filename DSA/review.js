class Node{
    constructor(value){
        this.value = value;
        this.next= null;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
    insert(value,index){
        if(index<0||index>this.size){
            return;
        }
        if(index===0){
            this.prepend(value);
        }
        else{
            const node = new Node(value);
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++
        }
    }
    removeNode(index){
        if(this.isEmpty()){
            return 'List is empty'
        }
        if(index===0){
            this.head = this.head.next;
            this.size--
            return;
        }
        else{
            let removeNode;
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            if(prev.next){
                removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--
                return removeNode.value;
            }
        }
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--
            return value;
        }
        else{
            let curr = this.head;
            while(curr && curr.value!==value){
                curr = curr.next;
            }
            if(curr.next){
                let removeNode = curr.next;
                curr.next = removeNode.next;
                this.size--
                return removeNode.value;
            }
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1;
        }
        else{
            let curr = this.head;
            for(let i=0;i<this.size;i++){
                if(curr.value===value){
                    return i;
                }
                curr=curr.next;
            }
            return -1
        }
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    print(){
        if(this.isEmpty()){
            return 'List is empty';
        }
        else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues+=`${curr.value}`;
                curr=curr.next;
            }
            console.log(listValues)
        }
    }
    removeMid(){
        if(this.isEmpty()){
            return null;
        }
        if(this.size===0){
            this.head = null;
            this.size--
            return;
        }
        let mid = Math.floor(this.size/2);
        let removedNode;
        let prev = this.head;
        for(let i= 0;i<mid-1;i++){
            prev = prev.next;
        }
        if(mid === 0){
            removedNode = this.head;
            this.head = removedNode.next;
            this.size--;
            return removedNode.value;
        }
        else{
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return removedNode.value;
        }
    }
}