export const mergeSortHelp = array => {
    
    if(array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    const firstHalf = mergeSortHelp(array.slice(0, mid));
    const secondHalf = mergeSortHelp(array.slice(mid));
    const sortedArr = [];
    let i = 0, j = 0;
    while(i < firstHalf.length && j < secondHalf.length){
        if(firstHalf[i] < secondHalf[j]){
            sortedArr.push(firstHalf[i]);
            i++;
        } else {
            sortedArr.push(secondHalf[j]);
            j++;
        }
    }

    while(i < firstHalf.length) sortedArr.push(firstHalf[i++]);
    while(j < secondHalf.length) sortedArr.push(secondHalf[j++]);

    return sortedArr;
};