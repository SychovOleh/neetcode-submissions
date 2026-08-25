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
        let points = [-Infinity, Infinity];
        for (const c of t) {
            tChars[c] = (tChars[c] ?? 0) + 1;
        }
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            chars[s[r]] = (chars[s[r]] ?? 0) + 1;
            while (this.includes(chars, tChars)) {
                if (points[1] - points[0] > r - l) {
                    points = [l, r];
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

    includes(charsLong, charsShort) {
         return Object.keys(charsShort).every(c => 
               charsShort[c] <= charsLong[c]
         );
    }
}
