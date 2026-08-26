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
        const tChars = {};
        const chars = {};
        for (const c of t) {
            tChars[c] = (tChars[c] ?? 0) + 1;
        }
        const expected = Object.keys(tChars).length;
        let matches = 0;
        let points = [-Infinity, Infinity];
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            chars[s[r]] = (chars[s[r]] ?? 0) + 1;
            if (chars[s[r]] === tChars[s[r]]) {
                matches += 1;
            }
            while (matches === expected) {
                if (points[1] - points[0] > r - l) {
                    points = [l, r];
                }
                if (chars[s[l]] === tChars[s[l]]) {
                    matches -= 1;
                }
                chars[s[l]] = chars[s[l]] - 1;
                l++; 
            }
        }

        if (points[0] === -Infinity) {
            return ''
        }
        return s.substring(points[0], points[1] + 1);
    }
}
