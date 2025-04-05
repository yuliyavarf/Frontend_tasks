function removeReps(array) {
    const uniqueArr = [];
    for(let i = 0; i < array.length; i++) {
      let duplicateNum = false;
      for (let j = 0; j < uniqueArr.length; j++) {
        if (array[i] === uniqueArr[j]) {
            duplicateNum = true;
            break;
        }
      }
      if (!duplicateNum) {
        uniqueArr.push(array[i]);
      }
    }
    return uniqueArr;
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
// console.log(removeReps([1,1,1,1]));
// console.log(removeReps([1,2,3,4,5,6]));
