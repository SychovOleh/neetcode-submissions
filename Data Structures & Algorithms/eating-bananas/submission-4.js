class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let lowestK = r;
        
        while (l <= r) {
            const k = Math.floor((l + r) / 2);
            if (this.canEat(piles, k, h)) {
                lowestK = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
            
        }
        return lowestK;
    }

    canEat(piles, k, h) {
        let total = 0;
        for (let p of piles) {
            total += Math.ceil(p / k);
            if (total > h) {
                return false
            }
        }
        return true;
    }
}
