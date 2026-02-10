///////////////////////////////////////INSERTION SORT////////////////////////////////////////////////////////////////////////////////////////////////


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let current = arr[i];
//         let j = i-1;
//         while(j>=0&&arr[j]>current){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = current;
//     }
//     return arr;
// }
// console.log(insertionSort(arr));



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////sort in alphabetical order////////////////////////
// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numberToInsert = arr[i]
//         let lowerCaseInsert = arr[i].toLowerCase()
//         let j = i - 1
//         while(j>=0&&arr[j].toLowerCase()>lowerCaseInsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numberToInsert
//     }
//     return arr
// }
// const arr = ["banana", "apple", "grape", "orange", "Mango"]
// console.log(insertionSort(arr));


////////////////////////////////Sort obj array by length/////////////////////////////////////////////////////////////////////////////////////////////

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let numberToInsert = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j].name.length>numberToInsert.name.length){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numberToInsert
//     }
//     return arr
// }
// const arr = [
//     { name: "Alex" },
//     { name: "Zoe" },
//     { name: "Christopher" },
//     { name: "John" }
// ]

// console.log(insertionSort(arr));