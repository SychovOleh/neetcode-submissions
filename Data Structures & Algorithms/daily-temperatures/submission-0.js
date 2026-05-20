class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // t -> [30,38,30,36,35,40,28]
        // st <- [[40, 5], [28, 6]] ? 
        // r [1, 4, 1, 2, 1, 0, 0]
        // ------------------
        // t -> [30,38,30,36,35,40,28]
        // st <- [[40, 5], [28, 6]] ? 
        // r [1, 4, 1, 2, 1, 0, 0]
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // [index, temperature]
        
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && t > stack.at(-1)[1]) {
                const [prevI] = stack.pop();
                res[prevI] = i - prevI;
            }
            stack.push([i, t]);
        }
        return res;
    }
}
