class Solution {
    constructor() {
        this.d = ';';
    }
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let s of strs) {
            res = res + String(s.length) + this.d + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let l = 0;
        let r = 1;
        while (r < str.length) {
            if (str[r] !== this.d) {
                r++;
                continue;
            }
            const length = Number(str.substring(l, r));
            r+=1;
            res.push(str.substring(r, r + length));
            l = r + length;
            r = l + 1;
        }
        return res;
    }
}
