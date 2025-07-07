function lengthOfLastWord(s: string): number {
    let len = s.length;
    let count = 0;
    for(let i=len-1; i>=0; i--){
        if ( s[i] === " "){
            if( count===0){
                continue;
            }else{
                break;
            }
        }else{
            count+=1;
        }
    }
    return count;
};