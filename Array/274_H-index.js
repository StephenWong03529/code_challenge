/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let len = citations.length;
    citations.sort((a,b) => a-b);

  for ( let i = 0; i<len;i++){
    if (citations[i]>=len-i){
        return len-i;
    }
  }
  return 0;
};