function fibo(index) {
    if (index < 0) {
      return "Error";
    }
    // a, b - первые два числа ряда Фибоначчи
    let a = 1; // если ряд начинается с 1; если с 0, то a = 0
    let b = 1;
  
    if (index === 0) {
      return a;
    }
    if (index === 1) {
      return b;
    }
    for (let i = 2; i <= index; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  
  console.log(fibo(5)); // 8
  console.log(fibo(1)); // 1
  console.log(fibo(8)); // 34
  console.log(fibo(21)); // 17711
