//https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    var minuses: number[] = []
    for (var i = nums.length; i > 0; i--) {
        const minus = target - nums[i]
        const index = nums.indexOf(minus)
        if (index != i && index != -1) {
            return [index, i]
        }
    }
    return []
};