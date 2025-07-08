function isPalindrome(x: number): boolean {
    if( x<0 || (x%10===0 && x !== 0)) return false; 
    const s = x.toString();
    let left = 0, right= s.length-1;

    while(left < right){
        if( s.charAt(left++) !== s.charAt(right--))return false;
    }
    return true;
};