class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        const chars = new Set();
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            chars.add(s[r]);
            while(l <= r && chars.size < r - l + 1) {
                if (s[l] !== s[r]) {
                    chars.delete(s[l]);
                }
                l++;
            }
            longest = Math.max(longest, r - l + 1);
        }
        return longest;
    }
}
