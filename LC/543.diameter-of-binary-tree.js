/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    let res = 0;
    let map = new Map();
    
    inorder(root);
    
    return res;
    
    function inorder(node) {
        if(!node) return 0;
        
        if(map.has(node))
            return map.get(node);
        
        let ans = 0;
        let left = inorder(node.left);
        let right = inorder(node.right);
        if(left + right > res)
            res = left + right;
        
        ans = 1 + Math.max(left, right);
        map.set(node, ans);
        
        return ans;
    }
};
var DetailMode = function(root) {
    if(!root) return 0;
    let res = 0;
    let map = new Map();
    
    inorder(root);
    
    return res;
    
    function inorder(node) {
        if(!node) return;
        
        let left = helper(node.left);
        let right = helper(node.right);
        if(left + right > res)
            res = left + right;
        
        inorder(node.left);
        inorder(node.right);
    }
    
    
    function helper(node) {
        if(!node) return 0;
        
        if(map.has(node))
            return map.get(node);
        
        let res = Math.max(1 + helper(node.left), 1 + helper(node.right));
        map.set(node, res);
        
        return res;
    }
};
// @lc code=end

