class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // right until valid
        //   left until invalid
        const countT = {};
        for (let c of t) {
            countT[c] = (countT[c] ?? 0) + 1;
        }

        let res = [];
        let length = Infinity;
        
        const need = Object.keys(countT).length;
        const countS = {};
        let have = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const char = s[r];

            countS[char] = (countS[char] ?? 0) + 1;
            if (countS[char] === countT[char]) {
                have += 1;
            }

            while (have === need) {
                if (r - l + 1 < length) {
                    res = [l , r];
                    length = r - l + 1;
                }

                countS[s[l]] = countS[s[l]] - 1;
                if (countT[s[l]] && countS[s[l]] < countT[s[l]]) {
                    have -= 1;
                }
                l++;
            }
        }
     
        return length === Infinity ? '' : s.substring(res[0], res[1] + 1);
    }
}
