///////////////////////////////////////BUBBLE SORT////////////////////////////////////////////////////////////////////////////////////////////////

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//     for(let i = 0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//            let temp = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = temp
//             swapped = true
//         }
//     }
// }
// while(swapped)
// return arr
// }

// console.log(bubbleSort([-2,-6,5,1,2,7]))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////sort an array of strings by length////////////////
// let arr = ["apple", "pear", "banana", "kiwi", "grape"]

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i].length>arr[i+1].length){
//                let temp = arr[i+1]
//                 arr[i+1] = arr[i]
//                 arr[i] = temp
//                 swapped = true
//             }
//         }
//     }
//     while(swapped)
//     return arr
// }
// console.log(bubbleSort(arr))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////sort an array object by age////////////////////
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 30 }
// ];

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i].age>arr[i+1].age){
//                let temp = arr[i+1]
//                 arr[i+1] = arr[i]
//                 arr[i] = temp
//                 swapped = true
//             }
//         }
//     }
//     while(swapped)
//     return arr
// }
// console.log(bubbleSort(people))



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////Count no. of swaps/////////////////////////
// const people = [
//         { name: "Alice", age: 25 },
//         { name: "Bob", age: 20 },
//         { name: "Charlie", age: 30 }
//     ];
    
//     function bubbleSort(arr){
//         let swapped, swapCount = 0
//         do{
//             swapped = false
//             for(let i=0;i<arr.length-1;i++){
//                 if(arr[i].age>arr[i+1].age){
//                     let temp = arr[i+1]
//                     arr[i+1] = arr[i]
//                     arr[i] = temp
//                     swapped = true
//                     swapCount++
//                 }
//             }
//         }
//         while(swapped)
//         console.log('Total no. of swaps:', swapCount)
//         return arr
//     }
//     console.log(bubbleSort(people))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////OPTIMIZED/////////////////////////
// function bubbleSort(arr){
//     let swapped
//     for(let i = 0;i<arr.length-1;i++){
//         swapped = false
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                let temp = arr[j+1]
//                 arr[j+1]=arr[j]
//                 arr[j]=temp
//                 swapped = true
//             }
//         }
//         if(!swapped) break
//     }
//     return arr
// }
// console.log(bubbleSort([1, 2, 3, 4, 5, 6]))