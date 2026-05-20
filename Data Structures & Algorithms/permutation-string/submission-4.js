class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // s1 longer condition: only for optimization
        const chars1 = {};
        for (let c of s1) {
            chars1[c] = (chars1[c] ?? 0) + 1;
        }

        const window = {};
        const need = Object.keys(chars1).length;
        let have = 0;
        let l = 0;

        for (let r = 0; r < s2.length; r++) {
            if (r - l >= s1.length) {
                if (chars1[s2[l]] && s2[l] !== s2[r]) {
                    if (chars1[s2[l]] === window[s2[l]]) {
                        have--;
                    } else if (chars1[s2[l]] === window[s2[l]] - 1) {
                        have++;
                    }
                }
                
                if (s2[l] === s2[r]) {
                    l++;
                    continue;
                }
                window[s2[l]] = window[s2[l]] - 1;
                l++;
            }


            if (chars1[s2[r]]) {
                if (chars1[s2[r]] === window[s2[r]]) {
                    have--;
                }
                window[s2[r]] = (window[s2[r]] ?? 0) + 1;
                if (chars1[s2[r]] === window[s2[r]]) {
                    have++;
                }
            }
            
            if (need === have) {
                return true
            }
        }

        return need === have;
    }
}
