/////////Linear Search/////////O(n)
// function findIndex(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(findIndex([1,2,3],4))

////////Binary Search/////////O(log n)
// function binarySearchIndex(arr,target){

//     let sortedArr = arr.sort((a,b)=>a-b)
//     let left = 0
//     let right = sortedArr.length-1
    
//     while(left <=right){
//         let middleIndex = Math.floor((left+right)/2)
//         if(target === sortedArr[middleIndex]){
//             return middleIndex
//         }
//         if(target<sortedArr[middleIndex]){
//             right = middleIndex-1
//         }
//         else{
//             left = middleIndex+1
//         }
//     }
//     return -1
// }
// console.log(binarySearchIndex([1,2,3],-1))