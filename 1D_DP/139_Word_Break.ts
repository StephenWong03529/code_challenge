function wordBreak(s: string, wordDict: string[]): boolean {
    const arr: number[] = new Array(s.length+1 ).fill(0);
    arr[s.length] = 1;

    for(let i = s.length-1; i>=0; i--){
        let ans = false;
        for( let j = 0; j<wordDict.length;j++){
            if( s.substring(i, i+wordDict[j].length)=== wordDict[j]){
                ans = ans || arr[i+wordDict[j].length] === 1;
            }
            arr[i] = ans ?1:0;
        }
    }
    return arr[0] ===1;
};