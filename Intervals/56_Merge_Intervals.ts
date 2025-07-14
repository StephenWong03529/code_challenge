function merge(intervals: number[][]): number[][] {
    if( intervals.length <=1 ) return intervals;
    intervals.sort((a,b) => a[0]-b[0]);

    const merged = [];
    let [start, end] = intervals[0];

    for(let i = 1; i<intervals.length;i++){
       let [currStart , currEnd] = intervals[i];
       if( currStart <= end){
        end = Math.max(end , currEnd);
       } else {
        merged.push([start,end]);
        [start, end] = [currStart, currEnd];
       }
    }
    merged.push([start,end])
    return merged;
};