function jump(nums: number[]): number {
    let cur = 0, far = 0, jump =0;

    while(far< nums.length-1){
        let farthest = 0;
        for(let i = cur; i<= far;i++){
            farthest = Math.max(farthest, i + nums[i])
        }
        cur = far+1;
        far = farthest;
        jump++;
    }
    return jump;
};