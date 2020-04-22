/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len <= 2) return len;

    let k = 2;

    for(let i = 2; i < len; i++) {
        console.log(i, nums[i], k, nums[k-2])

        if(nums[i] !== nums[k-2]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};
// @lc code=end

removeDuplicates( [0,0,1,1,1,1,2,3,3])