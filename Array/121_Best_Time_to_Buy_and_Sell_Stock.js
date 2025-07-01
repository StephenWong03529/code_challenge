/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let buyprice = prices[0];
    let profit = 0;
   for (let i = 1; i<prices.length;i++){
    if(buyprice > prices[i]){
        buyprice = prices[i]
    }
    profit = Math.max(profit, prices[i]-buyprice);
   }
   return profit;
};