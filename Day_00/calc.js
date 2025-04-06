function generateNumber(n) {
    return function(callback) {
        if (callback) {
            return callback(n);
        } else {
            return n;
        }
    };
}

const one = generateNumber(1);
const two = generateNumber(2);
const three = generateNumber(3);
const four = generateNumber(4);
const five = generateNumber(5);
const six = generateNumber(6);
const seven = generateNumber(7);
const eight = generateNumber(8);
const nine = generateNumber(9);

function plus(a) {
    return function(b) {
        return a + b;
    };
}

function minus(a) {
    return function(b) {
        return a - b;
    };
}

function divide(a) {
    return function(b) {
        return a / b;
    };
}

function mult(a) {
    return function(b) {
        return a * b;
    };
}
    
console.log(one(mult(three(plus(four())))));    // 7
console.log(four());    // 4
console.log(five(mult(three())));   // 15
