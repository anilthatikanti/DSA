/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map=new Map(),left = 0,start=0,length = 0
    for(let right=0;right<s.length;right++){
        if(map.has(s[right])&&left<=map.get(s[right])) left = map.get(s[right])+1
        if(right-left>length){
            start = left;
            length = right+1-left
        }
        map.set(s[right],right)
    }
    return s.substring(start,start+length)
};
console.log(lengthOfLongestSubstring('aabcdefa'))