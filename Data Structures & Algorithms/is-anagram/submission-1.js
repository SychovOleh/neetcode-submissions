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

        const chars = {};
        
        for(let i = 0; i < s.length; i++) {
            if (chars[s[i]] === undefined) {
                chars[s[i]] = 0;
            }
            chars[s[i]] = chars[s[i]] + 1;
        }
        
        for(let j = 0; j < t.length; j++) {
            if(chars[t[j]] === undefined) {
                return false;
            } 
            chars[t[j]] = chars[t[j]] - 1;
            if (chars[t[j]] < 0) {
                return false;
            }
        }
        
        
        return true
    }
}