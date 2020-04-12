/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0;
    
    for(let i = 0; i < 32; i++) {
        let bit = n & 1;
        n = n >> 1;
        if(bit) {
            res += Math.pow(2, 31-i);
        }
    }
    
    return res;
};
// @lc code=end

