/////////Recursive Binary Search///////////
// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,left,right){
//     if(left>right){
//         return -1
//     }
//     let middle = Math.floor((left+right)/2)
//     if(target===arr[middle]){
//         return middle
//     }
//     else if(target<arr[middle]){
//         return search(arr,target,left,middle-1)
//     }
//     else{
//         return search(arr,target,middle+1,right)
//     }
// }
// console.log(recursiveBinarySearch([1,2,3],4))



///////////recursive sum////////////
// function recursvieSum(arr,index=0){
//     if(index===arr.length) return 0;
//     return arr[index]+recursvieSum(arr,index+1)
// }



///////////even recursive sum/////////////////
// function recursvieSum(arr,index=0){
//     if(index===arr.length) return 0;
//     return arr[index]%2===0 ? arr[index]+recursvieSum(arr,index+1) : recursvieSum(arr,index+1)
// }



////////recursive reverse//////////
// function recursiveReverse(arr,index=arr.length-1){
//     if(index<0) return [];
//     let lastElement = arr[index];
//     return [lastElement,...recursiveReverse(arr,index-1)]
// }



////////recursive max/////////////////
// function recursiceMax(arr,index=0){
//     if(index===arr.length-1) return -Infinity
//     return Math.max(arr[index],recursiceMax(arr,index+1));
// }
// console.log(recursiveMax([1,2,3]))


//////recusrive occurences///////////
// function recursiveOcc(arr,target,index=0){
//     if(index === arr.length) return 0;
//     return (arr[index]===target ? 1 : 0) + recursiveOcc(arr,target,index+1)
// }
// console.log(recursiveOcc([1,2,2,3,4,5,5],5))


//////recursive equality/////////
// function recursiveEQ(arr1,arr2,index=0){
//     if(arr1.length!==arr2.length) return false;
//     if(index===arr1.length) return true;
//     return arr1[index] === arr2[index] && recursiveEQ(arr1,arr2,index+1)
// }
// console.log(recursiveEQ([1,2],[1,2]))


///////RecursiveUniqueCount/////////
// function recursiveCount(arr,index = 0){
//     if(index>=arr.length) return 0;
//     return (arr.indexOf(arr[index])===arr.lastIndexOf(arr[index]) ? 1:0)+recursiveCount(arr,index+1)
// }