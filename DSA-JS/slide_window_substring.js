var lengthOfLongestSubstring = function(s="abcabcbb") {
    const uniqueChar = new Map();
    let maxLength = 0;
    let left = 0;
    for (let right=0; right<s.length; right++){
        if(uniqueChar.has(s[right]) && uniqueChar.get(s[right]) >=left){
            left = uniqueChar.get(s[right]) + 1;
        }
        maxLength = Math.max(maxLength,right-left+1)
        uniqueChar.set(s[right],right);
    }
    return maxLength
    };
    console.log(lengthOfLongestSubstring())