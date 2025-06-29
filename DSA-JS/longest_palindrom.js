var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    
    function getSubstringIndex(left,right){
        while(left>=0 && right<s.length && s[left]===s[right]){
                --left;
                ++right;
            }
        return [++left,--right]
    }
    for (let i=0;i<s.length;i++){
       let [l1,r1]= getSubstringIndex(i,i)
       let [l2,r2] = getSubstringIndex(i,i+1)
       if((end-start) < (r1-l1)){
        start = l1;
        end = r1
       }
       if((end-start) < (r2-l2)){
        start = l2;
        end = r2
       }
    }    
    return s.substring(start,end+1)
};
