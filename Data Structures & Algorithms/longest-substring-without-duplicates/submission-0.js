class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const w = new Set();
        let longest = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {            
            while (w.has(s[r])) {
                w.delete(s[l]);
                l++;
            }
            w.add(s[r]);
            longest = Math.max(w.size, longest);
        }
        return longest;
    }
}
