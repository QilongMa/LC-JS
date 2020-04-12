/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let m = grid.length, n = m && grid[0].length || 0;
    if(n === 0) return 0;
    
    let cnt = 0;
    let nbs = 0;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                cnt++;
                search(i, j);
            }
        }
    }
    
    return cnt * 4 - nbs;
    
    function search(x, y) {
        if(x > 0 && grid[x-1][y] !== 0)
            nbs++;
        if(x < m-1 && grid[x+1][y] !== 0)
            nbs++;
        if(y > 0 && grid[x][y-1] !== 0)
            nbs++;
        if(y < n-1 && grid[x][y+1] !== 0)
            nbs++;
    }
};
