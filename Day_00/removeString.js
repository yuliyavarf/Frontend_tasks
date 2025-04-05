function removeString(message, symbol) {
    return message.split(symbol).join('');
}

// const removeString = (message, symbol) => message.replaceAll(symbol, '');

console.log(removeString("Большое и интересное сообщение", "о")); // Бльше и интересне сбщение
console.log(removeString("Hello world!", "z")); //Hello world!
console.log(removeString("А роза азора", "А")); //роза азора
