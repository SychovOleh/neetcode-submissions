class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const counts = new Map();
        for (let c of s1) {
            counts.set(c, (counts.get(c) ?? 0) + 1);
        }

        let l = 0;
        
        for (let r = s1.length - 1; r < s2.length; r++) {
            const wCounts = new Map();
            for (let i = l; i <= r; i++) {
                wCounts.set(s2[i], (wCounts.get(s2[i]) ?? 0) + 1);
            }
            if (this.isCountsEqual(counts, wCounts)) {
                return true
            }
            
            // wCounts.set(s2[l], wCounts.get(s2[l]) - 1);
            l++;
        }
        return false;
    }

    isCountsEqual(m1, m2) {
        for (let k of m1.keys()) {
            if (m1.get(k) !== m2.get(k)) return false;
        }
        return true
    }
}
