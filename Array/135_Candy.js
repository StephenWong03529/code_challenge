/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length;
    let candy = n;
    let i = 1;

    while( i < n ){
        if( ratings[i]===ratings[i-1]){
            i++;
            continue;
        }
        let Peak = 0;
        while( i < n && ratings[i] > ratings[i-1]){
            Peak++;
            candy+=Peak;
            i++;
        }
        let Low = 0;
        while( i < n && ratings[i] < ratings[i-1]){
            Low++;
            candy+=Low;
            i++;
        }
        candy-= Math.min(Peak,Low);
    }
    return candy;
    
};