// Create a function that merges two arrays and removes all duplicates elements.

function mergeArraysRemDupl(arrFirst, arrSec) {
    const result_array = [];
    const arr = arrFirst.concat(arrSec);
    let len = arr.length;
    const assoc = {};
	
    while(len--) {
        const item = arr[len];
        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }
    return result_array;
}

const arrFirst = [44,51,7];
const arrSec = [35,60,99];
console.log(mergeArraysRemDupl(arrFirst, arrSec));
