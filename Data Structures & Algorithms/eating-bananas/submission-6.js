class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // let k = Math.max(...piles);
        // let k = 1;
        // let total = 0;
        // let prevTotal = 0;
        let l = 1;
        let r = Math.max(...piles);
        let res = r;
        while (l <= r) {
            const k = Math.floor((l + r) / 2);
            const total = piles.reduce((acc, p) => acc + Math.ceil(p / k), 0)
            // 1 2 3 4
            if (total > h) {
                l = k + 1;
            } else {
                res = k;
                r = k - 1;
            }
        }
        return res;
    }
}
