function pascalsTriangle(x, y) {
    if (y === 0 || y === x) {
      return 1;
    } else {
      return pascalsTriangle(x - 1, y - 1) + pascalsTriangle(x - 1, y);
    }
  }
  
  console.log(pascalsTriangle(3, 2)); // 3
  console.log(pascalsTriangle(5, 4)); // 5
  console.log(pascalsTriangle(1, 1)); // 1
