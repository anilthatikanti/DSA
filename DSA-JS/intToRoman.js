// /**
//  * @param {number} num
//  * @return {string}
//  */
// var intToRoman = function(num) {
//     let val = [1000,900,500,400,
//                 100,90,50,40,
//                 10,9,5,4,
//                 1];
//     let sym = ['M','CM','D','CD',
//                 'C','XC','L','XL',
//                 'X','IX','V','IV','I'];
//     let roman = ''
//     let i = 0;
//     while(num>0){
//         let count = Math.floor(num/val[i])
//         roman += sym[i].repeat(count);
//         num -= val[i]*count
//         i++;
//     }
//     return roman

// };
// console.log(intToRoman(3749)) ///MMMDCCXLIX

var romanToInt = function(s) {
    let sym = ['M','CM','D','CD',
                'C','XC','L','XL',
                'X','IX','V','IV',
                'I'];
    let  num = [
                1000,900,500,400,
                100,90,50,40,
                10,9,5,4,
                1];
    let str = s.split('');
    for(let i=0 ; i < s.length;i++){
        let index = sym.indexOf(s[i])
        str[i] = num[index];
    }
    let i = 0;
    let j = 1;
    while(j<str.length){
        if(str[i]<str[j]){
            str[j] = str[j] - str[i]*2
            i = j+1;
            j = i + 1
        }else{
            ++i;
            j = i+1
            continue
        }

    }
    return str.reduce((acc,cur)=>acc+cur,0)
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))