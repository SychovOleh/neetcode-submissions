class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return '';
        }
        const tChars = new Map();
        const chars = new Map();
        for (const c of t) {
            tChars.set(c, (tChars.get(c) ?? 0) + 1);
        }
        const expected = tChars.size;
        let matches = 0;
        let points = [-Infinity, Infinity];
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            chars.set(s[r], (chars.get(s[r]) ?? 0) + 1)
            if (chars.get(s[r]) === tChars.get(s[r])) {
                matches += 1;
            }
            while (matches === expected) {
                if (points[1] - points[0] > r - l) {
                    points = [l, r];
                }
                if (chars.get(s[l]) === tChars.get(s[l])) {
                    matches -= 1;
                }
                chars.set(s[l], chars.get(s[l]) - 1);
                l++; 
            }
        }

        if (points[0] === -Infinity) {
            return ''
        }
        return s.substring(points[0], points[1] + 1);
    }
}
