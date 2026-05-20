class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let str of strs) {
            res += str.length;
            res += ';'
            res += str
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let end = 0;
        let i = 0;
        while (i < str.length) {
            const c = str[i];
            if (c === ';') {
                const n = Number(str.slice(end, i));
                end = i + 1 + n;
                res.push(str.slice(i + 1, end));
                i = end;
            } else {
                i++;
            }
        }
        return res;
    }
}
