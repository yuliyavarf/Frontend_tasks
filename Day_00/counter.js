function counter() {
    let count = -3;

    return function() {
        count += 3;
        return count;
    };
}
const increment = counter();
console.log(increment()); // Функция вернет 0
console.log(increment()); // Функция вернет 3
console.log(increment()); // Функция вернет 6
console.log(increment()); // Функция вернет 9
