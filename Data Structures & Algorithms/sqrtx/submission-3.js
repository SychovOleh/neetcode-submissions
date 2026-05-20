class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 1) {
            return 0;
        }
        let l = 1;
        let r = x;
        let low = 0;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            const pow = m * m;
                        
            if (pow > x) {
                r = m - 1;
            } else if (pow < x) {
                low = m;
                l = m + 1;
            } else {
                return m
            }
        }
        return low;
    }
}

// 9
            // 1 2 3 4 5 6 7 8 9
            //         +
            // 1 2 3 4
            //   +
            // 2 3 4
            //   +
            // 3 4
