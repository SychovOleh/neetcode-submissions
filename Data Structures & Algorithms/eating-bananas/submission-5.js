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
        let prev = 0;
        
        while (l <= r) {
            const k = Math.floor((l + r) / 2);
            const total = piles.reduce((acc, p) => acc + Math.ceil(p / k), 0)
            if (total > h) {

            }
        }
        // return k;
    }
}
