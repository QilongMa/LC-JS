/*
 * @lc app=leetcode id=802 lang=javascript
 *
 * [802] Find Eventual Safe States
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
// remove all the nodes that are involved into loops
var eventualSafeNodes = function(graph) {
    let len = graph.length;
    
    let res = [];
    let state = new Array(len).fill(0);
    
    // 0-> unknown 1->safe 2->visiting 3-> unsafe
    for(let i = 0; i < len; i++) {
        if(dfs(i) === 1) {
            res.push(i);
        }
    }
    
    return res;
    
    function dfs(idx) {
        // if(state[idx] === 2) return 2;
        if(state[idx] !== 0) return state[idx];

        state[idx] = 2;
        for(let val of graph[idx]) {
            if(dfs(val) >= 2) {
                state[val] = 3;
                return 3;
            }
        }
        
        state[idx] = 1;
        return 1;
    }
};
// @lc code=end

