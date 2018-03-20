>11. Container With Most Water
>35. Search Insert Position
>41. First Missing Positive

* * *
#### 11. Container With Most Water

**Description**   
>Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
Note: You may not slant the container and n is at least 2.

**Solution**  
**思路**  
>1. 2 pointers
>2. compare 2 sides' height, based on minheight * length to get maximum result
>3. move pointers based on the minheight. since when we start from the 2 sides, we already get the max width, the possible larger area only occurs with higher height. 


```JavaScript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var res = 0, sum = 0;
    var left = 0, right = height.length - 1;
    
    while(left < right) {
        var minHeight = Math.min(height[left], height[right]);
        res = Math.max(minHeight * (right - left), res);
        
        while(height[left] <= minHeight && left < right) left++;
        while(height[right] <= minHeight && right > left) right--;
    }
        
    return res;
};
```
* * *
* * *
#### 35. Search Insert Position

**Description**   
>Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
>You may assume no duplicates in the array.

**Solution**  
**思路**  
>1. check 2 sides and corner cases >= || <=


```JavaScript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length;
    if(len < 1 || nums[0] >= target) return 0;
    if(nums[len-1] < target) return len;
    
    let i = 1;
    for( ; i < len; i++) {
        if(nums[i] >= target) {
            return i;
        }
    }
    
};
```
* * *
* * *
#### 41. First Missing Positive

**Description**   
>Given an unsorted integer array, find the first missing positive integer.
>For example,
>```Given [1,2,0] return 3, and [3,4,-1,1] return 2.```
>Your algorithm should run in O(n) time and uses constant space.
**Solution**  
**思路**  
>1. sort the array, and iterate the array, O(nlogn);
>2. iterate the array, and each time put index slot with reasonable num. After all element put in the correct slot, iterate the new array and return the 1st element which in wrong place.
>3. For 2, check boundries
    >a. the value must > 0 and < len
    >b. nums[idx] !== idx + 1
    >c. !!! to avoid infinite loop, nums[nums[idx] - 1] !== nums[idx], which means the target to switch must meet the condition that the target is not in the correct place, otherwise we cannot touch it any more.

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = 0, len = nums.length;
    for(let i = 0; i < len; i++) {
        while(nums[i] >= 0 && nums[i] <= len && nums[i] !== i + 1 && nums[nums[i]-1] !== nums[i]) {
            let tmp = nums[i];
            nums[i] = nums[nums[i]-1];
            // use nums[tmp-1] instead of nums[nums[i]-1] because of nums[i] got changed
            nums[tmp-1] = tmp;
        }
    }    
    for(let i = 0; i < len; i++) {
        if(nums[i] !== i + 1) {
            return i+1;
        }
    }
    return len+1;
};
```
* * *