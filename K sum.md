>15. 3Sum

* * *
#### 15. 3Sum

**Description**   
>Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
>Note: The solution set must not contain duplicate triplets.
>For example, given array S = [-1, 0, 1, 2, -1, -4],
>A solution set is:
>[
>  [-1, 0, 1],
>  [-1, -1, 2]
>]

**Solution**  
**思路**  
>1.对数组进行排序，JS 要考虑 sort function 的默认排序不可行
2.每次固定最左边的值， 2个指针逼近
3.如果sum = 0, j++,k-- 注意规避重复值， 否则根据sum与0的大小比较 进行指针移动
4.最外层的i 也要注意规避重复值

```JavaScript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    nums = nums.sort((a,b)=>{return a-b});
    
    for(var i = 0, len = nums.length; i < len - 2; ){
        for(var j = i + 1, k = len - 1; j < k; ){
            var sum = nums[i] + nums[j] + nums[k];
            if(sum === 0){
                res.push([nums[i], nums[j], nums[k]]);
                j++; k--;
                while(j < k && nums[j] === nums[j-1]){ j++;}
                while(k > j && nums[k] === nums[k+1]){ k--;}                
            }
            else{
                sum > 0 ? k--: j++;
            }
        }
        i++;
        while(i < len - 2 && nums[i] === nums[i-1]){
            i++;
        }
    }
    return res;
};
```