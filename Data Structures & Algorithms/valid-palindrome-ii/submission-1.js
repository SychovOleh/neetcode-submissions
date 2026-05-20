class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        
        while (l < r) {
            if (s[l] !== s[r]) {
                return this.solve(s, l + 1, r)
                    || this.solve(s, l, r - 1);
            }
            l+=1;
            r-=1;
        }
        return true
    }
    
    solve(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false
            }
            l+=1;
            r-=1;
        }
        return true
    }
}
