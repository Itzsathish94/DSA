///////Climbing Staircase/////////
// function climbingStaircase(n){
//     if(n===0) return 0
//     const noOfways = [1,2]
//     for(let i=2;i<=n;i++){
//         noOfways[i]=noOfways[i-1]+noOfways[i-2]
//     }
//     return noOfways[n-1]
// }
// console.log(climbingStaircase(5))
// console.log(climbingStaircase(1))
// console.log(climbingStaircase(0))

/////////////////REMOVING MIDDLE ELEMENT FROM LINKED LIST//////////////
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
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
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }
        else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
    removeMidElement(){
        let mid = Math.floor((this.size/2))
        let prev = this.head
        for(let i=0;i<mid-1;i++){
            prev = prev.next
        }
        prev.next = prev.next.next
        this.size--
    }
}

let list = new linkedList()

console.log(list.isEmpty())
console.log(list.getSize())
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.prepend(5)
list.print()
list.removeMidElement()
list.print()
list.removeMidElement()
list.print()