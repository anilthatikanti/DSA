/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sortedList = nums.sort((a,b)=>a-b)
    let result = [];
    for(let i = 0;i<sortedList.length-2;i++){
        if(i>0&&sortedList[i]===sortedList[i-1]) continue;
        let left = i + 1 ;
        let right = sortedList.length-1;
        while(left<right){
            let sum = sortedList[i]+ sortedList[left]+ sortedList[right];
            if(sum<0) left++;
            else if(sum>0) right--;
            else {
                result.push([sortedList[i],sortedList[left],sortedList[right]]);
                left++;
                right--;
                while(left<right&&sortedList[left]===sortedList[left-1]) left++;
                while(left<right&&sortedList[right]===sortedList[right+1]) right--;
            }
        }

    }
    return result
};