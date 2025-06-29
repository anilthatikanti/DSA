let a = [1,5,8,7,5,2,4,8,7]

function quickSort(arr){
    if(arr.length<=1) return arr
    let pivot = arr[arr.length-1]
    let left = [];
    let right = []
    for (let i = 0; i< arr.length-1;i++){
        
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(a)) //complexity O(n log n)


//common sort
// let a = [1,5,8,7,5,2,4,8,7]


// for (let i = 0; i = a.length;i++){
//     for (let j = i+1; j<a.length;j++){
//         if(a[i]>a[j]){
//             let replaceItem = a[i]
//             a[i]= a[j]
//             a[j]= replaceItem
//         }
//     }
// }

