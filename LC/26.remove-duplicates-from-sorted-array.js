/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1, len = nums.length;

    for(let i = 0; i < len; i++) {
        if(k === 0 || nums[k-1] !== nums[i])
            nums[k++] = nums[i];
    }    

    return k;
};
// @lc code=end

