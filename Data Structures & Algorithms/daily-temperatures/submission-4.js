class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const s = [];
        const res = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (s.length > 0 && t > s.at(-1)[1]) {
                const [prevI] = s.pop();
                res[prevI] = i - prevI;
            }
            s.push([i, t]);
        }
        return res;
    }
}
