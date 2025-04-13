var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char] -= 1;
    }
    for (let count of Object.values(charCount)) {
        if (count !== 0) {
            return false;
        }
    }
  
    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
