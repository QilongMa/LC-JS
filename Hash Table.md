>202. Happy Number

* * *
#### 202. Happy Number 

**Description**   
>Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1


**Solution**  
**思路**  
>1. 把任意整数拆成个位数
2. 计算个位数的平方和， 并存入Hash Table
3. 返回条件： a. 平方和为1  b. 出现loop/重复值

```JavaScript
/**
 * @param {number} n
 * @return {boolean}
 */
var getDigits = function(n){
    let res = [];
    while(n > 0){
        let num = n % 10;
        res.push(num);
        n = Math.floor(n/10);
    }
    return res;
}

var isHappy = function(n) {
    return helper(n, []);
};

var helper = function(n, records){
    var arr = getDigits(n);
    let sum = 0;
    for(let i = 0, j = arr.length; i < j; i++){
        sum += arr[i] * arr[i];        
    }
    if(sum === 1) return true;
    if(records.length > 0 && records.indexOf(sum) > -1){
        return false;
    }
    else{
        records.push(sum);
        return helper(sum, records);
    }    
}

```
* * *