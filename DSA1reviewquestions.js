    // let name = 'Rahul ranjan'

// function recRev(str,index=str.length-1){
//     if(index<0) return '';
//     return str[index]+recRev(str,index-1)
// }
// console.log(recRev(name))

function reverseWords(str) {
    if (str.length === 0) return '';
    let spaceIndex = str.indexOf(' ');
    
    if (spaceIndex === -1) return str.split('').reverse().join('');
    
    let firstWord = str.slice(0, spaceIndex).split('').reverse().join('');
    return firstWord + ' ' + reverseWords(str.slice(spaceIndex + 1));
}

let name = 'Rahul ranjan';
console.log(reverseWords(name)); // Output: "luhar najnar"


// reverse(){
//     let prev = null
//     let curr = this.head
//     while(curr){
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = curr.next
//     }
//     this.head = prev
// }

// console.log(reverse(name))

// let arr = ['a','b','C','d','e']

// let target = 'd'

// function binarySearch(arr,target){
//     let left = 0
//     let right = arr.length-1

//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(target === arr[mid]){
//             return mid
//         }
//         if(target < arr[mid]){
//             right = mid-1
//         }
//         else{
//             left = mid+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr,target))