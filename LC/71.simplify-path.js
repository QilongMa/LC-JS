/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let paths = path.split('/').filter((i)=> i !== '' && i !== '.');
    
    for(let val of paths) {
        if(val === '..') {
            if(stack.length)
                stack.pop();
        }
        else
            stack.push(val);
    }
    
    return '/' + stack.join('/');
};