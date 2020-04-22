/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let len = rooms.length;
    if(len <= 1) return true;
    
    let keys = rooms[0];
    let visited = new Array(len).fill(0);
    visited[0] = 1;
    let cnt = 1;

    for(let key of keys) {
        dfs(key);
    }
    
    return cnt === len;
    
    function dfs(x) {
        if(visited[x] !== 0 ) return;
        
        let list = rooms[x];
        visited[x] = 2;
        for(let next of list) {
            dfs(next);
        }
        
        visited[x] = 1;
        cnt++;
        
        return;
    }
};
// @lc code=end

