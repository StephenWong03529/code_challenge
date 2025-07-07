function strStr(haystack: string, needle: string): number {
    const hlen = haystack.length;
    const nlen = needle.length;

    if(nlen > hlen){
        return -1;
    }else if( nlen === hlen){
        if(haystack === needle){
            return 0;
        }else{
            return -1;
        }
    }else{
        let last = 0;
        let checker = 0; 
        for(let i = 0; i<hlen; i++){
            let j = 0;
            for(;j<nlen; j++){
                if(haystack[i+j] !== needle[j]){
                    break;
                }
            }
            if (j === nlen) {
            return i; // `i` is the starting index of the match.
        }
        }
        return -1;
    }
 
};