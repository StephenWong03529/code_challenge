function findMinArrowShots(points: number[][]): number {
    if (points.length ===1) return 1;
    const pts = points.sort((a,b)=> a[1]-b[1]);
    let arrow = 1;
    let end = pts[0][1];

    for(let i = 1;i<pts.length;i++){
        if(pts[i][0]>end){
            arrow++;
            end = pts[i][1];
        }
    }
    return arrow;
};