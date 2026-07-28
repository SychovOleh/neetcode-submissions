class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const chars = [];
        let l = 0;
        let max = 0;
        for (let r = 0; r < s.length; r++) {
            const i = this.getI(s[r]);
            chars[i] = (chars[i] ?? 0) + 1;
            while(l <= r && (r - l + 1) - Math.max(...chars) > k) {
                chars[this.getI(s[l])] -= 1;
                l++;
            }
            max = Math.max(max, r - l + 1);
        }
        return max;
    }

    getI(char) {
        return char.charCodeAt() - 'A'.charCodeAt()
    }
}
