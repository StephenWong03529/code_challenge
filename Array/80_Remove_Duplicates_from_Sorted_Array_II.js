/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.lenght==0){
        return 0;
    }
    let k=1;
    let last=nums[k-1];
    let dexu=false;
    for ( let i = 1; i<nums.length ; i++){
       if (nums[i]===last){
        if (dexu !== false){
            i--;
            k++;
            nums.splice(i,1);
        }else {
            dexu = true;
            k++;
        }
       }else{
        last = nums[i];
        dexu = false;
        k++;
       }
    }
    return k;
};