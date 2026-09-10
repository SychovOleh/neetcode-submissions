class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let chars = [];
        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            if (c === ']') {
                let str = '';
                c = chars.at(-1);
                while (c !== '[') {
                    c = chars.pop();
                    if (c !== '[') {
                        str = c + str;
                    }
                }
                let num = '';
                c = chars.at(-1);
                while (c !== undefined && !isNaN(parseInt(c))) {
                    chars.pop();
                    num = c + num;
                    c = chars.at(-1);
                }
                const pattern = str.split('');
                for (let count = parseInt(num); count > 0; count--) {
                    chars = chars.concat(pattern);
                }
                continue;
            }
            chars.push(c);
        }

        return chars.join('');
    }
}
