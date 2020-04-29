/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    
    let cnt = 0;
    let stack = [];
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 2)
                stack.push([i,j]);
            cnt += grid[i][j] > 0 ? 1: 0;
        }
    }
    
    if(stack.length === 0 && stack.length !== cnt) return -1;
    if(cnt === stack.length) return 0;
    
    let step = 0;
    let newCnt = stack.length;
    
    while(stack.length) {
        let len = stack.length;
        let tmp = [];
        for(let i = 0; i < len; i++) {
            let [x, y] = stack.pop();
            if(x > 0 && grid[x-1][y] === 1) {
                tmp.push([x-1, y]);
                grid[x-1][y] = 2;
            }
            if(x < m - 1 && grid[x+1][y] === 1) {
                tmp.push([x+1, y]);
                grid[x+1][y] = 2;
            }
            if(y > 0 && grid[x][y-1] === 1) {
                tmp.push([x, y-1]);
                grid[x][y-1] = 2;
            }
            if(y < n-1 && grid[x][y+1] === 1) {
                tmp.push([x, y+1]);
                grid[x][y+1] = 2;
            }
        }
        if(tmp.length > 0) {
            step++;
            newCnt += tmp.length;
        }
        stack = tmp;
    }
    
    if(cnt !== newCnt) return -1;
    
    return step;
};