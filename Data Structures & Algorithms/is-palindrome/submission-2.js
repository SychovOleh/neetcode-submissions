class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let L = 0;
        let R = s.length - 1;

        while(L < R) {
            while(L < R && !/[A-Za-z0-9]/.test(s[L])) {
                L += 1;
            }
            while (L < R && !/[A-Za-z0-9]/.test(s[R])) {
                R -= 1;
            }
            if (s[L].toLowerCase() !== s[R].toLowerCase()) {
                return false
            }
            L += 1;
            R -= 1;
        }
        return true;
    }
}
