class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const strStack = [];
        const countStack = [];
        let k = '';
        let str = '';
        for (let c of s) {
            if (!isNaN(parseInt(c))) {
                k = k + c;
            } else if (c === '[') {
                countStack.push(parseInt(k));
                k = '';
                strStack.push(str);
                str = '';
            } else if (c === ']') {
                str = str.repeat(countStack.pop());
                str = strStack.pop() + str;
            } else {
                str += c;
            }
        }
        return strStack.join('') + str;
    }
}
