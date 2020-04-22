
// Optimized
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
        let val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) 
        this.cache.delete(key);
    this.cache.set(key, value);    

    if(this.cache.size > this.capacity) {
        let eKey = this.cache.keys().next().value;
        this.cache.delete(eKey);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 // Original
var LRUCacheOriginal = function(capacity) {
    this.size = capacity;
    this.map = new Map();
    this.arr = [];
};

LRUCacheOriginal.prototype.get = function(key) {
    if(this.map.has(key)) {
        let idx = this.arr.indexOf(key);
        this.arr.splice(idx,1);
        this.arr.unshift(key);
        // this.arr = [key, ...this.arr.slice(0, idx), ...this.arr.slice(idx+1)];
        return this.map.get(key);
    }
    return -1;
};
LRUCacheOriginal.prototype.put = function(key, value) {
    if(this.map.get(key)) {
        this.map.set(key, value);
        let idx = this.arr.indexOf(key);
        this.arr.splice(idx,1);
        this.arr.unshift(key);
        // this.arr = [key, ...this.arr.slice(0, idx), ...this.arr.slice(idx+1)];
    }
    else {
        if(this.arr.length >= this.size) {
            let tmp = this.arr.pop();
            this.map.delete(tmp);
        }
        this.arr.unshift(key);
        this.map.set(key, value);
    }
};
