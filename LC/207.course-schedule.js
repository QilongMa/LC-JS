/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// Topological Sort
var canFinish = function(num, pre) {
    let visited = new Array(num).fill(0);
    for(let i = 0; i < num; i++) {
        if(helper(i))
            return false;
    }
    
    return true;
    
    function helper(i) {
        if(visited[i] === 1) 
            return false;
        if(visited[i] === 2) {
            return true;
        }
        visited[i] = 2;
        
        for(let val of pre) {
            let x = val[0], y = val[1];
            if(x === i) {
                if(helper(y))
                    return true;
            }
        }
        
        visited[i] = 1;
        return false;
    }
};
var BasicTopo = function(num, pre) {
    let visited = [];
    let len = pre.length;
    for(let i = 0; i < num; i++) {
        if(helper(i, []))
            return false;
    }
    
    return true;
    
    function helper(i, visiting) {
        if(visited.includes(i)) 
            return false;
        if(visiting.includes(i)) {
            return true;
        }
        visiting.push(i);
        
        for(let val of pre) {
            let x = val[0], y = val[1];
            if(x === i) {
                if(helper(y, visiting))
                    return true;
            }
        }
        
        visited.push(i);
        return false;
    }
};
// @lc code=end

