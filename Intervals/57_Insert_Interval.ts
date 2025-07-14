function insert(intervals: number[][], newInterval: number[]): number[][] {
   const result: number[][] = [];
  let i = 0;
  const n = intervals.length;
  let [start, end] = newInterval;

  // 1) add all intervals ending before newInterval starts
  while (i < n && intervals[i][1] < start) {
    result.push(intervals[i]);
    i++;
  }

  // 2) merge all overlapping intervals
  while (i < n && intervals[i][0] <= end) {
    start = Math.min(start, intervals[i][0]);
    end   = Math.max(end,   intervals[i][1]);
    i++;
  }
  result.push([start, end]);

  // 3) add the remaining intervals
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};