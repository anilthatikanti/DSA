/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let num = '';
    s = s.trim();
    if(s.length===0) return 0;
    let startIndex = 0;
    let sign = 1
    if(s[0]==='-'){ sign = -1; startIndex = 1}
    if(s[0] === '+' ) {startIndex = 1}
    for(let i = startIndex;i<s.length;i++){
        if(!isNaN(s[i])&& s[i] !== " "){
            num += s[i]
        }else{
            break
        }
    }
    if(num.length===0) return 0;
    num = parseInt(num)*sign;
    if(num < -(2**31)) return -(2**31);
    else if(num > (2**31-1)) return 2**31-1;
    return num;
};