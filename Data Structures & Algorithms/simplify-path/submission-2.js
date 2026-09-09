class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const folders = [];
        const paths = path.split('/');
        for (const cur of paths) {
            if (cur === '..') {
                folders.pop();
            } else if (cur === '' || cur === '.') {
                continue;
            } else {
                folders.push(cur);
            }
        }

        // merge
        return '/' + folders.join('/');
    }
}
