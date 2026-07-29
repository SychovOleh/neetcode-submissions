class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1chars = new Array(26).fill(0);
        for (let c of s1) {
            s1chars[c.charCodeAt() - 'a'.charCodeAt()] += 1;
        }
        const s2chars = new Array(26).fill(0);
        let l = 0;
        for (let r = 0; r < s2.length; r++) {
            s2chars[s2[r].charCodeAt() - 'a'.charCodeAt()] += 1;
            if (r < s1.length - 1) {
                continue;
            }
            if (s1chars.every((count, i) => count === s2chars[i])) {
                return true
            };
            s2chars[s2[l].charCodeAt() - 'a'.charCodeAt()] -= 1;
            l++;
        }
        return false
    }
}
