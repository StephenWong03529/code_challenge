function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    const dp = [];

    for( const num of nums){
        let left = 0, right = dp.length;
        while(left <right){
            const mid = (left+right) >> 1;
            console.log(mid)
            if(dp[mid] < num){
                left = mid +1;
            } else {
                right = mid;
            }
        }
        dp[left] = num;
    }
    return dp.length;
};