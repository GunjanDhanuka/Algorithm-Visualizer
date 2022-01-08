// export const mergeSortHelp = array => {
    
//     if(array.length === 1) return array;
//     const mid = Math.floor(array.length / 2);
//     const firstHalf = mergeSortHelp(array.slice(0, mid));
//     const secondHalf = mergeSortHelp(array.slice(mid));
//     const sortedArr = [];
//     let i = 0, j = 0;
//     while(i < firstHalf.length && j < secondHalf.length){
//         if(firstHalf[i] < secondHalf[j]){
//             sortedArr.push(firstHalf[i]);
//             i++;
//         } else {
//             sortedArr.push(secondHalf[j]);
//             j++;
//         }
//     }

//     while(i < firstHalf.length) sortedArr.push(firstHalf[i++]);
//     while(j < secondHalf.length) sortedArr.push(secondHalf[j++]);

//     return sortedArr;
// };


function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxArray,
    animations
) {
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxArray, middleIdx+1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animations);

}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxArray,
    animations
) {
    let k = startIdx, i = startIdx, j = middleIdx + 1;

    while(i <= middleIdx && j <= endIdx){

        //Push the values we are comparing
        //First push to change their color
        //Second push to revert their color
        animations.push([i, j]);
        animations.push([i, j]);
        if(auxArray[i]  <= auxArray[j]){
            animations.push([k, i]);
            mainArray[k++] = auxArray[i++];
        } else {
            animations.push([k, j]);
            mainArray[k++] = auxArray[j++];
        }

    }

    while(i <= middleIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,i]);
        mainArray[k++] = auxArray[i++];
    }

    while(j <= endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,j]);
        mainArray[k++] = auxArray[j++];
    }
}

export function getMergeSortAnimations(array){
    const animations = [];
    if(array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
    return animations;
}

