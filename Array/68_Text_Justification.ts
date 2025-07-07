function fullJustify(words: string[], maxWidth: number): string[] {
   let res = [];
   let cur = [];
   let nums = 0;

   for( let word of words){
    if(word.length + cur.length + nums > maxWidth){
        for(let i = 0; i < maxWidth - nums ;i++){
            cur[i % (cur.length-1||1)] += ' ';
        }
        res.push(cur.join(""));
        cur=[];
        nums= 0;
    }
    cur.push(word);
    nums+=word.length;
   }

   let lastLine = cur.join(' ');
   while(lastLine.length < maxWidth) lastLine += ' ';
   res.push(lastLine);

   return res;
};