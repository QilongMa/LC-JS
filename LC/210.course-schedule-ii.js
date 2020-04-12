/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(num, pre) {
    let len = pre.length;
    if(len === 0) {
        return new Array(num).fill(0).map((val, idx) => idx);
         
    }
    
    let res = [];
    let visited = new Array(num).fill(0);
    
    for(let i = 0; i < num; i++) {
        if(topo(i))
            return [];
    }
    
    // console.log(res);
    return res;
    
    function topo(x) {
        if(visited[x] === 1) return false;
        if(visited[x] === 2) return true;
        
        visited[x] = 2;
        
        for(let arr of pre) {
            let m = arr[0], n = arr[1];
            if(m === x) {
                if(topo(n)) {
                    return true;
                }
            }
        }
        
        visited[x] = 1;
        res.push(x);
        return false;
    }
};