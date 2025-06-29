
function getNumber(num,index){
   return Math.floor(Math.abs(num)/Math.pow(10*i)%10)
}

function radixSort(arr){
   let large = arr.map((num)=>  num.toString().length)
   let maxNumber = Math.max(...large)
   for(let k=0;k<maxNumber;k++){
       let bucketArray=Array.from({length:10},()=>[])
       console.log(maxNumber)
       for(let i=0;i<arr.length;i++){
           bucketArray[getNumber(arr[i],k)].push(arr[i])
       }
       console.log(bucketArray)
       arr = [].concat(...bucketArray)
       console.log(arr)
   }
}

let arr = [7,5,8,7,6,2,13,1]
radixSort(arr)