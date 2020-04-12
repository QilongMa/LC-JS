/*
 * @lc app=leetcode id=576 lang=javascript
 *
 * [576] Out of Boundary Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
    let dp = new Array(N+1).fill(0).map(()=> new Array(m).fill(0).map(() => new Array(n).fill(0)));
    let dir = [[1,0], [-1, 0], [0, 1], [0, -1]];
    let max = 1000000007;

    for(let c = 1; c <= N; c++) {
        for(let a = 0; a < m; a++) {
            for(let b = 0; b < n; b++) {
                for(let z = 0; z < 4; z++) {
                    let x = a + dir[z][0];
                    let y = b + dir[z][1];
                    if(x < 0 || x >= m || y < 0 || y >= n) 
                        dp[c][a][b] += 1;
                    else
                        dp[c][a][b] = (dp[c][a][b] + dp[c-1][x][y]) % max;
                }
            }
        }
    }

    return dp[N][i][j];
};
// @lc code=end

