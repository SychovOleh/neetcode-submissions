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
            if (s.length < 1) {
                s.push([i, t])
            }
            let prev = s.at(-1);
            while (prev && t > prev[1]) {
                prev = s.pop();
                res[prev[0]] = i - prev[0];
                prev = s.at(-1);
            }
            s.push([i, t]);
        }
        return res;
    }
}
