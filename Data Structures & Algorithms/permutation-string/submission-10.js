class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[ord(s1[i])] += 1;
            s2Count[ord(s2[i])] += 1;
        }
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches += 1;
            }
        }

        if (matches === 26) return true;

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            const iL = ord(s2[l]);
            s2Count[iL] -= 1;
            if (s1Count[iL] === s2Count[iL]) {
                matches += 1;
            } else if (s1Count[iL] === s2Count[iL] + 1) {
                matches -= 1;
            }
            l++

            const iR = ord(s2[r]);
            s2Count[iR] += 1;
            if (s1Count[iR] === s2Count[iR]) {
                matches += 1;
            } else if (s1Count[iR] === s2Count[iR] - 1) {
                matches -= 1;
            }
            if (matches === 26) return true
        }
        return false
    }
}

function ord(char) {
    return char.charCodeAt() - 'a'.charCodeAt()
}