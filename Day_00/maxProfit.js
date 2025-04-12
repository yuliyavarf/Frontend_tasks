var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        if (currentPrice < minPrice) {
           minPrice = currentPrice;
        } else {
            const profit = currentPrice - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};

 // prices = [7,1,5,3,6,4]
// output: 5
// buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5
