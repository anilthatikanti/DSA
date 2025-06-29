var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1,...nums2].sort((a,b)=>a-b)
        let n = merged.length;
        if (n % 2 === 1) return merged[Math.floor(n / 2)];
        return (merged[n / 2] + merged[n / 2 - 1]) / 2;
    };

    console.log(findMedianSortedArrays([1,3,4],[2,5]))