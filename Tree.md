# LC Tree Series (35).md
94 Binary Tree Inorder Traversal  
95 Unique Binary Search Trees II  
96 Unique Binary Search Trees  
98 Validate Binary Search Tree  
99 Recover Binary Search Tree  
100 Same Tree  
101 Symmetric Tree  
102 Binary Tree Level Order Traversal  
103 Binary Tree Zigzag Level Order Traversal  
104 Maximum Depth of Binary Tree  
105 Construct Binary Tree from Preorder and Inorder Traversal  
106 Construct Binary Tree from Inorder and Postorder Traversal  
107 Binary Tree Level Order Traversal II  
108 Convert Sorted Array to Binary Search Tree  
109 Convert Sorted List to Binary Search Tree  
110 Balanced Binary Tree  
111 Minimum Depth of Binary Tree  
112 Path Sum  
113 Path Sum II  
114 Flatten Binary Tree to Linked List  
116 Populating Next Right Pointers in Each Node  
117 Populating Next Right Pointers in Each Node II  
124 Binary Tree Maximum Path Sum  
129 Sum Root to Leaf Numbers  
144 Binary Tree Preorder Traversal  
145 Binary Tree Postorder Traversal  
173 Binary Search Tree Iterator  
199 Binary Tree Right Side View  
222 Count Complete Tree Nodes  
226 Invert Binary Tree  
230 Kth Smallest Element in a BST  
235 Lowest Common Ancestor of a Binary Search Tree  
236 Lowest Common Ancestor of a Binary Tree  
257 Binary Tree Paths  
297 Serialize and Deserialize Binary Tree  

* * *
#### 94. Binary Tree Inorder Traversal

**Description**   
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3], return [1,3,2].

**Solution**  
**思路**  
>1. 递归或迭代
>2. 左->中->右， 递归：返回条件为当前节点不存在， 递归先左子树，存储当前值，递归右子树
>3. 迭代： 使用stack, 循环条件为stack不为空或者当前Node存在， 循环主体：1.必须把当前节点存到stack，并且左子树走到底， 2.取出stack最上面的节点，并且存入结果数列， 当前节点为该节点的右子树

```JavaScript
/**
 * Definition for singly-linked list./**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
###iterative
var inorderTraversal = function(root) {
    var res = [];
    var stack = [];
    var node = root;
    
    while(node || stack.length > 0){
        while(node){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        res.push(node.val);
        node = node.right;        
    }
    
    return res;
};
### recursive
var helper = function(node, arr){
    if(node === null){
        return arr;
    }
    helper(node.left, arr);
    arr.push(node.val);
    helper(node.right, arr);
}

var inorderTraversal = function(root) {
    var arr = [];
    helper(root, arr);
    return arr;
};
```