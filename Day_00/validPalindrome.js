var isPalindrome = function(s) {
    const filteredChars = s.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char)).join('');

    const reversedChars = filteredChars.split('').reverse().join('');
    return filteredChars === reversedChars;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
