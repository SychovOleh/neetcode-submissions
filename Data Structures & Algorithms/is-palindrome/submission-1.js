class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const trimed = s.replaceAll(/[^A-Za-z0-9]/g, '')
        let L = 0;
        let R = trimed.length - 1;

        
        while(L < R) {
            // while(!/[A-Za-z0-9]/.test(s[L])) {
            //     L += 1;
            // }
            // while (!/[A-Za-z0-9]/.test(s[R])) {
            //     R -= 1;
            // }
            if (trimed[L].toLowerCase() !== trimed[R].toLowerCase()) {
                return false
            }
            L += 1;
            R -= 1;
        }
        return true;
    }
}
