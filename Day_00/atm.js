function atm(sum) {
  const banknotes = [5000, 2000, 1000, 500, 200, 100, 50];
  const result = {};
  let totalBanknoteCounter = 0;

  for (let i = 0; i < banknotes.length; i++) {
    const denomination = banknotes[i];
    if (sum >= denomination) {
      const count = Math.floor(sum / denomination);
      sum -= count * denomination;
      result[denomination] = count;
      totalBanknoteCounter += count;
    }
  }

  if (sum > 0) {
    return "Incorrect value";
  }

  if (totalBanknoteCounter > 20) {
    return "Limit exceeded";
  }

  return result;
}

console.log(atm(8350)); // {5000 : 1, 2000 : 1, 1000 : 1, 200 : 1, 100 : 1, 50 : 1 }
// console.log(atm(2570)); // Incorrect value
// console.log(atm(100050)); // Limit exceeded
