class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const strStack = [];
        const countStack = [];
        let k = 0;
        let str = '';
        for (let c of s) {
            const curNum = parseInt(c);
            if (!isNaN(curNum)) {
                k = 10 * k + curNum;
            } else if (c === '[') {
                countStack.push(k);
                k = '';
                strStack.push(str);
                str = '';
            } else if (c === ']') {
                str = strStack.pop() + str.repeat(countStack.pop());
            } else {
                str += c;
            }
        }
        return strStack.join('') + str;
    }
}
