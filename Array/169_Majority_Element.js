var majorityElement = function(nums) {
 let candidate = null;
    let count = 0;

    // Phase 1: Find a candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Verify the candidate (optional if we assume there's always a majority element)
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    return count > nums.length / 2 ? candidate : -1;
};