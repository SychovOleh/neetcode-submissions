class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let s of strs) {
            res = res + `${s.length}#${s}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++
            }
            j += 1;
            const length = parseInt(str.substring(i, j));
            i = j + length;
            res.push(str.substring(j, i));
        }
        return res;
    }
}
