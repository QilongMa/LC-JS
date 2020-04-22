/*
 * @lc app=leetcode id=931 lang=javascript
 *
 * [931] Minimum Falling Path Sum
 */

// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: 12
// Explanation: 
// The possible falling paths are:
// [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
// [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
// [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    let row = A.length, col = row && A[0].length;
    let max = Number.MAX_SAFE_INTEGER;
    let dp = new Array(row).fill(max).map(()=> new Array(col).fill(max));
    dp[0] = A[0].slice();

    for(let i = 1; i < row; i++) {
        for(let j = 0; j < col; j++) {
            let left = (j - 1 >= 0 ? dp[i-1][j-1] : max);
                right = (j + 1 < col ? dp[i-1][j+1] : max);
            dp[i][j] = Math.min(left, dp[i-1][j], right) + A[i][j];
        }
    }

    return Math.min(...dp[row-1]);
    
};
// @lc code=end

