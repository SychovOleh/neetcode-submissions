class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const folders = [];
        let cur = '';
        // unwind
        for (let i = 0; i < path.length; i++) {
            const c = path[i];
            if (c === '/') {
                if (cur === '' | cur === '.') {
                } else if (cur === '..') {
                    folders.pop();
                } else {
                    folders.push(cur);
                }
                cur = '';
                continue;
            } else if (i === path.length - 1) {
                cur += c;
                folders.push(cur)
            } else {
                cur += c;
            }
        }
        // merge
        return '/' + folders.join('/');
    }
}
