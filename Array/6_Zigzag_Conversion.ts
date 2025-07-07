function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;   // trivial cases

  const rows: string[] = Array.from({ length: numRows }, () => ""); // row buffers
  let r = 0;                   // current row
  let step = 1;                // +1 going down, -1 going up

  for (let c of s) {
    rows[r] += c;              // append char to current row buffer
    if (r === 0) step = 1;     // bounce at the top
    else if (r === numRows - 1) step = -1; // bounce at the bottom
    r += step;                 // move to next row
  }

  return rows.join("");        // concatenate without extra flatten
}