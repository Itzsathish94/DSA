/////////reverse string///////////
// function recRev(str,index=str.length-1){
//     if(index<0) return '';
//     return str[index]+recRev(str,index-1)
// }
// console.log(recursiveRev('Hello'))

////////palindrome///////////////
// function recursivePalindrome(str,left=0,right=str.length-1){
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     if(left>=right) return true;
//     return str[left]===str[right] ? recursivePalindrome(str,left+1,right-1) : false;
// }
// console.log(recursivePalindrome('malayalam'))

//////count vowels////////
// function countVowels(str,index=0){
//     if(index>=str.length) return 0;
//     let vowels = /[aeiou]/gi;
//     return (vowels.test(str[index]) ? 1:0) + countVowels(str,index+1);
// }
// console.log(recursiveVowels('hello'))


// function recursiveLength(str){
//     if(str.length===0) return 0
//     return 1+recursiveLength(str.slice(1))
// }
// console.log(recursiveLength('hello'))

///////count words///////
// function countWords(str,index=0,wordcount=0){
//     str = str.trim();
//     if(index>=str.length) return wordcount;
//     if(str[index]!==' ' && (index===0 || str[index-1] === ' ')){
//         wordcount++
//     }
//     return countWords(str,index+1,wordcount);
// }


///////Remove duplicates///////
// function removeDuplicates (str,index=0,result=''){
//     if(index>=str.length) return result;
//     if(result.indexOf(str[index])===-1){
//         result += str[index];
//     }
//     return removeDuplicates(str,index+1,result);
// }