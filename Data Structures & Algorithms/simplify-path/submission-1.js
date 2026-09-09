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
            if (c === '/' || i === path.length - 1) {
                if (i === path.length - 1 && c !== '/') {
                    cur += c;
                }
                if (cur === '' | cur === '.') {
                } else if (cur === '..') {
                    folders.pop();
                } else {
                    folders.push(cur);
                }
                cur = '';
                continue;
            }
            cur += c;
        }
        // merge
        return '/' + folders.join('/');
    }
}
