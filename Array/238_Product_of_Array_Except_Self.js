/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let product = Array(n).fill(1);

    let left = 1;
    for (let i = 0 ; i < n ; i++){
        product[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = n - 1 ; i >= 0 ; i--){
        product[i] *= right;
        right *= nums[i];
    }
    return product;
};