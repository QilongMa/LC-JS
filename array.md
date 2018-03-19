>11. Container With Most Water

* * *
#### 11. Container With Most Water

**Description**   
>Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
Note: You may not slant the container and n is at least 2.

**Solution**  
**思路**  
>1. 2 pointers
2. compare 2 sides' height, based on minheight * length to get maximum result
3. move pointers based on the minheight. since when we start from the 2 sides, we already get the max width, the possible larger area only occurs with higher height. 


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
