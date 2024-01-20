//https://leetcode.com/problems/median-of-two-sorted-arrays/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let arr: number[] = []
    let i1 = 0, i2 = 0
    while (i1 < nums1.length && i2 < nums2.length) {
        arr.push(nums1[i1] < nums2[i2] ? nums1[i1++] : nums2[i2++]);
    }
    arr = [...arr, ...nums1.slice(i1), ...nums2.slice(i2)];
    const mid = (arr.length - 1) / 2
    return (arr[Math.ceil(mid)] + arr[Math.floor(mid)]) / 2
};