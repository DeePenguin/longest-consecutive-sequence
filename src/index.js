module.exports = function longestConsecutiveLength(array) {
  const set = new Set(array);
  let longestConsecutive = 0;
  for (let num of set){
    if (!(set.has(num-1))){
      let counter = 0;
      let current = num;
      while (set.has(current ++)) counter++;
      longestConsecutive = Math.max(longestConsecutive, counter);
    }
  }
  return longestConsecutive;
}

