class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const chars = new Set();
        let max = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            // console.log(r, s[r], chars)
            chars.add(s[r]);
            max = Math.max(max, chars.size);
            // console.log('max', max)

            while (chars.size < (r - l + 1)) {
                // console.log('l', l, r - l + 1);
                // console.log('l chars', chars)
                if (s[l] !== s[r]) {
                    chars.delete(s[l]);
                }
                l++;
            }
        }
        
        return max
    }
}