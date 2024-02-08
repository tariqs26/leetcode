function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let [min, max] = [Infinity, -Infinity]
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] > max) {
        max = prices[i]
        maxProfit = Math.max(maxProfit, max - min)
      }
      if (prices[i] < min) min = max = prices[i]
    }
    return maxProfit
  }