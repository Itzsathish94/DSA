////////////remove middle element/////////////////
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    removeMid() {
        if (this.isEmpty()) {
            return null;
        }
        let mid = Math.floor(this.size / 2);

        if (this.size === 1) {
            let removedValue = this.head.value;
            this.head = null;
            this.size--;
            return removedValue;
        }

        let prev = this.head;
        let removedNode;

        for (let i = 0; i < mid - 1; i++) {
            prev = prev.next;
        }
        if (mid === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            removedNode = prev.next;
            prev.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeDuplicates() {
        if (this.isEmpty()) {
            return 'List is empty';
        }
        let curr = this.head;
        let prev = null;
        let seen = new Set();
        while (curr) {
            if (seen.has(curr.value)) {
                prev.next = curr.next;
                this.size--
            } else {
                seen.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    mergeLL(l1, l2) {
        let merged = new LinkedList();
        let current1 = l1.head;
        let current2 = l2.head;
        while (current1) {
            merged.append(current1.value);
            current1 = current1.next;
        }
        while (current2) {
            merged.append(current2.value);
            current2 = current2.next;
        }
        return merged;
    }

    removeOdd() {
        let curr = this.head;
        while (this.head && this.head.value % 2 !== 0) {
            this.head = this.head.next;
            this.size--;
        }
        while (curr && curr.next) {
            if (curr.next.value % 2 !== 0) {
                curr.next = curr.next.next;
                this.size--
            }
            else {
                curr = curr.next;
            }
        }
    }

    findMid(index = 0, curr = this.head, mid=Math.floor(this.size/2)){
        if(!curr) return null;
        if(index === mid) return curr.value;
        return this.findMid(index+1,curr.next,mid);
    }


print(){
    if (this.isEmpty()) {
        console.log('List is empty')
    }
    else {
        let curr = this.head
        let listValues = ''
        while (curr) {
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
}
}

const list = new LinkedList()


list.prepend(1)
list.prepend(12)
list.prepend(31)
list.prepend(451)
list.prepend(51)
list.print()
list.removeMid()
