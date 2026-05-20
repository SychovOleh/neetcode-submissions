class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const sChars = {};
        const tChars = {};
        for (let i = 0;i < s.length; i++) {
            sChars[s[i]] = (sChars[s[i]] || 0) + 1;
            tChars[t[i]] = (tChars[t[i]] || 0) + 1;
        }
        for (let c in sChars) {
            if (sChars[c] !== tChars[c]) {
                return false;
            }
        }
        for (let c in tChars) {
            if (tChars[c] !== sChars[c]) {
                return false;
            }
        }
        return true;
    }
}
