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

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(index,value){
        if(index<0||index>this.size){
            return 
        }
        if(index===0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index<0||index>this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode = this.head
            this.head = this.head.next
        } else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head = this.head.next
            this.size--
            return value
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.value !==value){
                prev = prev.next
            }
            if(prev.next){
            let removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return value
            }
            return null
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let curr = this.head
        for(let i=0;i<this.size;i++){
            if(curr.value===value){
                return `index ${i} has value ${value}`
            }
            curr = curr.next
        }
        return -1
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

console.log(list.isEmpty())
list.print()
list.prepend(10)
list.prepend(20)
list.print()
list.append(100)
list.print()
list.append(1020)
list.print()
list.insert(0,1)
list.print()
list.insert(6,444)
list.print()
console.log(list.search(1))
list.insert(0,123)
list.print()
list.insert(2,222)
list.print()
list.insert(9,1223)
list.print()
list.removeValue(1030)
list.print()
list.reverse()
list.print()
