class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // {code map : [str]} ; time 0(n) ; space O(n * m)
        // chars code count map (array) ; time O(n * m) ; space 0(m)
        const groups = {};
        
        for (let str of strs) {
            const charCodesCount = new Array(26);
            // const charCodes = [];
            for (let c of str) {
                const charI = c.charCodeAt(0) % 26;
                // const charI = c.charCodeAt(0);
                charCodesCount[charI] = (charCodesCount[charI] || 0) + 1;
            }
            const strKey = charCodesCount.join(',');
            if (groups[strKey] === undefined) {
                groups[strKey] = [];
            }
            groups[strKey].push(str);
        }
        
        return Object.values(groups);
    }
}
