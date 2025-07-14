function summaryRanges(nums: number[]): string[] {
    if(nums.length===1)return [`${nums[0]}`];
    let res = [];
    let head = 0;
    let tail = 0;
    let last = nums[0];

    for (let i = 1; i<nums.length;i++){
        if( nums[i] - last !== 1){
            if( head === i -1){
                res.push(`${nums[i-1]}`);
            }else{
                res.push(`${nums[head]}->${nums[i-1]}`);
            }
            head = i;
        }else{
            tail = i;
        }
        last = nums[i];
        if( i===nums.length-1){
           if(head === i){
                res.push(`${nums[i]}`);
           }else{
                res.push(`${nums[head]}->${nums[i]}`);
           }
        }
    }
    return res;
};