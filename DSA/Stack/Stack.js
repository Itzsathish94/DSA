class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    push(value) {
        const NODE = new Node(value);
        NODE.next = this.head;
        this.head = NODE;
        this.size++
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const POPPED_VALUE = this.head.value;
            this.head = this.head.next;
            this.size--;
            return POPPED_VALUE
        }
    }

    peek() {
        if (this.isEmpty()) {
            return `Stack is empty`
        }
        else {
            return this.head.value;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return null
        }
        else {
            let curr = this.head;
            let index = 0;
            while (curr) {
                if (curr.value === value) {
                    return `Value ${value} found at Index ${index}`
                }
                curr = curr.next;
                index++
            }
            return `Value not found in the Stack`
        }
    }

    convertToArray() {
        const ARR = [];
        let curr = this.head;
        while (curr) {
            ARR.push(curr.value);
            curr = curr.next;
        }
        return ARR
    }

    reverse() {
        if (this.isEmpty()) {
            return `Stack is empty`;
        }
        else {
            let prev = null;
            let curr = this.head;
            while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;
        }
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    contains(value) {
        if (this.isEmpty()) {
            return `Stack is empty`
        }
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true
            }
            curr = curr.next;
        }
        return false
    }

    clone() {
        const NEW_STACK = new Stack();
        let curr = this.head;
        while (curr) {
            NEW_STACK.push(curr.value);
            curr = curr.next;
        }
        return NEW_STACK.reverse()
    }

    removeMidElement() {
        // const ARR = [];
        // let curr = this.head;
        // while(curr){
        //     ARR.push(curr.value);
        //     curr = curr.next;
        // }
        // const MID = Math.floor(ARR.length/2);
        // ARR.splice(MID,1);
        // this.head=null;
        // this.size=0;
        // for(i=ARR.length-1;i>=0;i--){
        //     this.push(ARR[i])
        // }
        if (this.isEmpty()) {
            return `Stack is empty`
        }

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (prev) {
            prev.next = slow.next;
        }
        else {
            this.head = null;
        }
        this.size--
    }

    removeDuplicate(){
        const temp_stack = new Stack();
        let curr = this.head;
        let currentValue = this.pop();
        while(!this.isEmpty()){
            let currentValue = this.pop();
            if(temp_stack.isEmpty() || this.pop){
                
            }
        }
    }

    reverseString(value) {
        const NEWSTR_STACK = new Stack();
        for (let char of value) {
            NEWSTR_STACK.push(char)
        }
        let reversedString = '';
        while (!NEWSTR_STACK.isEmpty()) {
            reversedString += NEWSTR_STACK.pop()
        }
        return reversedString;
    }


    removeNode(value){
        if(this.isEmpty()){
            return `Stack is empty`;
        }
        if(this.head.value===value){
            let removedNode = this.head;
            this.head = removedNode.next;
            this.size--
            return removedNode.value;
        }
        else{
            let curr = this.head;
            while(curr.next){
                if(curr.next.value===value){
                    let removedNode = curr.next;
                    curr.next = removedNode.next;
                    this.size--
                    return removedNode.value
                }
                curr = curr.next;
            }
            return null;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log(`Stack is empty`);
        }
        else {
            let curr = this.head;
            let stackValues = '';
            while (curr) {
                stackValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(stackValues);
        }
    }

    sort(){
        const temp_stack = new Stack();
        while(!this.isEmpty()){
            const currentvalue = this.pop();
            while(!temp_stack.isEmpty() && temp_stack.peek()<currentvalue){
                this.push(temp_stack.pop())
            }
            temp_stack.push(currentvalue);
        }
        
        while(!temp_stack.isEmpty()){
            this.push(temp_stack.pop())
        }
    }

    sortEven() {
        const temp_stack = new Stack(); 
        const odd_stack = new Stack();  
    
        while (!this.isEmpty()) {
            const currentValue = this.pop();
            if (currentValue % 2 === 0) {
                while (!temp_stack.isEmpty() && temp_stack.peek() < currentValue) {
                    this.push(temp_stack.pop());
                }
                temp_stack.push(currentValue);
            } else {
                odd_stack.push(currentValue);
            }
        }
    
        while (!temp_stack.isEmpty()) {
            this.push(temp_stack.pop());
        }
    
        while (!odd_stack.isEmpty()) {
            this.push(odd_stack.pop());
        }
    }

    reverseFirstK(k){
        if(this.isEmpty()){
            return `Stack is empty`;
        }
        else{
            const temp_stack = new Stack();
            let index = 0;
            while(index<k && !this.isEmpty()){
                temp_stack.push(this.pop());
                index++
            }
            temp_stack.reverse();
            while(!temp_stack.isEmpty()){
                this.push(temp_stack.pop());
            }
        }
    }

    palindrome(str){
        const NEW_STACK = new Stack();
        for(let char of str){
            NEW_STACK.push(char);
        }
        for(let i=0;i<str.length;i++){
            if(NEW_STACK.pop()!==str[i]){
                return false
            }
        }
        return true
    }

        balancedParanthesis(expression){
            const NEW_STACK = new Stack();
            const pairs = {')':'(','}':'{',']':'['};

            for(let char of expression){
                if(char === '(' || char==='{' || char==='['){
                    NEW_STACK.push(char);
                }
                else if(char ===')'||char==='}'||char===']'){
                    if(NEW_STACK.isEmpty() || NEW_STACK.pop()!==pairs[char]){
                        return false
                    }
                }
            }
            return NEW_STACK.isEmpty();
        }
}

const STACK = new Stack()

console.log(STACK.isEmpty())
STACK.push(1)
STACK.push(2)
STACK.push(3)
STACK.push(4)
STACK.push(5)
STACK.push(22)
STACK.push(66)
STACK.push(2)
STACK.print()
// STACK.pop()
// STACK.print()
// console.log(STACK.peek())
// console.log(STACK.search(2))
STACK.reverse();
STACK.print();
// console.log(STACK.convertToArray());
console.log(STACK.reverseString('Hello'))
STACK.removeNode(4)
STACK.print()
STACK.removeNode(2)
STACK.print()
STACK.sort()
STACK.print()
STACK.reverseFirstK(3)
STACK.print();