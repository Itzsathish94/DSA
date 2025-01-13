////////////////////QUICK SORT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////sort strings of array by length////////////////////////////////////////////////////////////////////////////////////////////////////////
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i].length<pivot.length){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// const fruits = ["banana", "apple", "kiwi", "orange", "grape"];
// console.log(quickSort(fruits))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////Sort array of objects/////////////////////////////////////////////////////////////////////////////////////////////////////
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i].name.length<pivot.name.length){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 25 }
// ];
// console.log(quickSort(people))



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////Mixed data types///////////////////////////////////////////////////////////////////////////////////////////////

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (typeof arr[i] === typeof pivot) {
//             if (arr[i] < pivot) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         } else {
//             if (typeof arr[i] === 'number') {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// const mixedArray = [3, "apple", 1, "banana", 2, "kiwi"];
// const sortedArray = quickSort(mixedArray);
// console.log(sortedArray); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////Mixed data types///////////////////////////////////////////////////////////////////////////////////////////////

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i].age < pivot.age) {
//             left.push(arr[i]);
//         } else if (arr[i].age > pivot.age) {
//             right.push(arr[i]);
//         } else {
//             if (arr[i].name < pivot.name) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 20 },
//     { name: "Eve", age: 25 }
// ];
// const sortedPeople = quickSort(people);
// console.log(sortedPeople);

