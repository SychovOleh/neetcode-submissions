class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counts = new Map(); // space O(n)
        let res = 0;
        let l = 0;
        let freq = 0;
        for (let r = 0; r < s.length; r++) {
            counts.set(s[r], (counts.get(s[r]) ?? 0) + 1);
            freq = Math.max(counts.get(s[r]), freq);
            while((r - l + 1) - freq > k) { // time: O(52 n) -> O(n); 
                counts.set(s[l], counts.get(s[l]) - 1);
                freq = Math.max(counts.get(s[r]), freq);
                l++;
            }
            // while((r - l + 1) - Math.max(...counts.values()) > k) {
            //     counts.set(s[l], counts.get(s[l]) - 1);
            //     l++;
            // }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
