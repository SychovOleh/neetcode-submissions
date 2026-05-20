class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0;
        const chars = new Map();
        let mostFreq = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const cur = (chars.get(s[r]) ?? 0) + 1;
            if (cur > mostFreq) {
                mostFreq = cur;
            }
            chars.set(s[r], cur);

            while (r - l + 1 - mostFreq > k) {
                chars.set(s[l], chars.get(s[l]) - 1);
                l++;
                mostFreq = Math.max(...chars.values());
            }
            max = Math.max(max, r - l + 1);
        }

        return max;
    }
}
