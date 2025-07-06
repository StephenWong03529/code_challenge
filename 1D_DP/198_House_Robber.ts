function rob(nums: number[]): number {
    const n :number = nums.length;
    const arr : number[] = Array(n+1).fill(0);
    arr[1] = nums[0];
    for(let i=2; i<=n ; i++){
        arr[i] = Math.max(arr[i-1], arr[i-2] + nums[i-1]);
    }

    return arr[n];
    
};