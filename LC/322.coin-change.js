/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let max = Number.MAX_SAFE_INTEGER;
    let len = coins.length;
    let memo = new Array(amount+1).fill(0);

    return helper(amount);

    function helper(cur) {
        if(cur === 0) {
            return 0;
        }
        if(cur < 0) {
            return -1;
        }
        if(memo[amount - cur] > 0)
            return memo[amount - cur];
            
        let res = max;

        for(let i = 0; i < len; i++) {
            let temp = helper(cur - coins[i]);
            if(temp >= 0 && (temp < res)) {
                res = temp + 1;
            }
        }

        memo[amount - cur] = (res === max ? -1 : res);

        return memo[amount - cur];
    }

};

var coinChange1 = function(coins, amount) {    
    let max = Number.MAX_SAFE_INTEGER;
    let len = coins.length;
    let map = new Array(amount + 1).fill(max);
        
    return recursive(amount);
        
    function recursive(cur) {
        if(cur === 0) {
            return 0;
        }
        if(cur < 0) {
            return -1;
        }
        
        if(map[amount - cur] < max) {
            return map[amount - cur];
        }
        
        let res = max;
        
        for(let i = 0; i < len; i++) {
            let tmp = recursive(cur - coins[i]);
            if(tmp >= 0 && tmp < res) {
                res = 1 + tmp;
            }
        }
        
        map[amount - cur] = (res === max ? -1 : res);
        return map[amount - cur];
    }
    
};

let res = coinChange([2], 62);
console.log(res);

