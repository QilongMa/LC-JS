var networkDelayTime = function(times, N, K) {    
    let map = new Map();
    let dist = new Array(N).fill(100*101);
    dist[K-1] = 0;
    
    for (let i = 1; i < N; ++i)
        for (let time of times) {
            let u = time[0] - 1, v = time[1] - 1, w = time[2];
            dist[v] = Math.min(dist[v], dist[u] + w);
        }
    

    let res = Math.max(...dist);

    return res === 10100 ? -1: res;
};

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
 //Maximum call stack size exceeded
var DFS = function(times, N, K) {
    let len = times.length;
    
    let map = new Map();
    let dist = new Array(N+1).fill(100*101);
    dist[0] = 0;
    
    for(let arr of times) {
        if(!map.has(arr[0]))
            map.set(arr[0], []);
        let dis = [arr[2], arr[1]];
        let tmp = map.get(arr[0]);
        tmp.push(dis);
        map.set(arr[0], tmp);
    }
    
    helper(K, 0);

    let res = Math.max(...dist);

    return res === 10100 ? -1: res;
    
    function helper(node, len) {
        if(len > dist[node])
            return;
        dist[node] = len;
        
        let arr = map.get(node);
        if(arr)
            for(let val of arr) {
                helper(val[1], val[0] + len);
            }
    }
};