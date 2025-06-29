var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let count_arr = new Array(26).fill(0);
    for(let i = 0; i<s.length;i++){
      ++count_arr[s.charCodeAt(i)-97];
      --count_arr[t.charCodeAt(i)-97];
    }
    return count_arr.every(count=>count===0)
  };

  console.log(isAnagram("anil","lina"))