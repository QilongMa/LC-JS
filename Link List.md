>206. Reverse Linked List

* * *
#### 206. Reverse Linked List

**Description**   
>Reverse a singly linked list.

**Solution**  
**思路**  
>1. 递归或回溯
2. 返回条件： 下一个node为空或者不存在， 返回当前Node
3. 循环主体： 改变指针指向， 用临时node存下下一个node的下一个指向， 重复循环（下一个Node， 临时node）

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

###iterative
var reverseList = function(head) {
    if(!head || !head.next){
        return head;
    }
    var cur = head;
    var next = head.next;
    head.next = null;
    
    while(cur && next){
        var tmp = next.next;
        next.next = cur;
        cur = next;
        next = tmp;
    }
    
    return cur;
};

###recursive
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    
    return helper(head, null);
};

var helper = function(cur, pre){
    if(!cur){
        return pre;
    }
    let tmp;
    if(cur.next)
        tmp = cur.next;
    cur.next = pre;
    return helper(tmp, cur);    
}
```
* * *