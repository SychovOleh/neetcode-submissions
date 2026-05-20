class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        
        for (let str of strs) {
            const chars = new Array(26).fill(0);
            for (let c of str) {
                const i = c.charCodeAt() - 'a'.charCodeAt();
                chars[i] = chars[i] + 1;
            }
            
            const key = chars.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(str)
        }

        return Object.values(res);
    }
}
