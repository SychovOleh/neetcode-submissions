class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // alphabetic array of ints as a key : 26

        // chars to ascii : O (m * n)
        // str to array -> join : O (1)

        // use vlaues of the hashmap : O (n)

        const groups = {};
        for (let str of strs) {
            const strKey = new Array(26).fill(0);
            for (let char of str) {
                const pos = char.charCodeAt(0) - 'a'.charCodeAt(0);
                strKey[pos] = strKey[pos] + 1;
            }
            const key = strKey.join(',');
            if (groups[key] === undefined) {
                groups[key] = [];
            }
            groups[key].push(str);
        }

        return Object.values(groups);
    }
}
