var isValid = function(s) {
    const parentheses = [];
    const characters = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };

    for (let char of s) {
        if (characters[char]) {
            const topElement = parentheses.pop();
            if (topElement !== characters[char]) {
                return false;
            }
        } else {
            parentheses.push(char);
        }
    }
    return parentheses.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
