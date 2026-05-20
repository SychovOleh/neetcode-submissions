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
            const m = Math.floor((l + r) / 2);
            if (this.canEat(piles, m, h)) {
                lowestK = Math.min(lowestK, m);
                r = m - 1;
            } else {
                l = m + 1;
            }
            
        }
        return lowestK;
    }

    canEat(piles, k, h) {
        let total = 0;
        for (let i = 0; i < piles.length; i++) {
            total += Math.ceil(piles[i] / k);
            if (total > h) {
                return false
            }
        }
        return true;
    }
}
