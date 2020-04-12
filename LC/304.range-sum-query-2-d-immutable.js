import { titleMapping } from "../unified_deploy/tco_configurator/src/actions/masterData/commonUtils";

/*
 * @lc app=leetcode id=304 lang=javascript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    let m = matrix.length, n = m && matrix[0].length;
    if(!m || !n) return;
    let cache = new Array(m).fill(0).map(()=> new Array(n).fill(0));
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let t1 = (i > 0 && j > 0) ? cache[i-1][j-1] : 0;
            let t2 = (i > 0) ? cache[i-1][j]: 0;
            let t3 = (j > 0) ? cache[i][j-1]: 0;
            cache[i][j] = matrix[i][j] + t1 + t2 + t3;
        }
    }
    this.cache = cache.slice();
    this.row = m;
    this.col = n;
    console.log('-----this.caceh', this.cache);
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

