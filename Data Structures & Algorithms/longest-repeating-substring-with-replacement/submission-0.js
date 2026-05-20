class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counts = new Map();
        let res = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {            
            counts.set(s[r], (counts.get(s[r]) ?? 0) + 1);
            // 6 - 4 -> 5 - 3 -> 4 - 2 -> 3 - 1
            // w - freq == 4 - 2 = 2
            
            while((r - l + 1) - Math.max(...counts.values()) > k) {
                counts.set(s[l], counts.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
