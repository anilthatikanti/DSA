/**
 * @param {string} digits
 * @return {string[]}
 */
function combination(arrStr){
    let result = ['']
    for(let str of arrStr){ 
      let temp = [];
      for (let pre of result){
        for (let char of str){
          temp.push(pre + char)
        }
      }
      result = temp
    }
   return result
   }
  var letterCombinations = function(digits) {
      let key =  {'2':"abc",'3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'};
      let strArr = digits.split('').map(dig=>key[dig])
      let comb = combination(strArr)
      return comb
  };
  console.log(letterCombinations('23'))