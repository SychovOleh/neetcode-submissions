class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // ToA cur < ToA next: 
        //   ToA cur = ToA next
        //   fleet + 1
        //
        let fleetsN = position.length;
        const road = position
            .map((p, i) => ([(target - p) / speed[i], p]))
            .sort((a, b) => a[1] - b[1]);
        for (let i = road.length - 2; i >= 0; i--) {
            const [curEta] = road[i];
            const [nextEta] = road[i + 1];
            if (curEta <= nextEta) {
                fleetsN -= 1;
                road[i][0] = nextEta;
            }
        }
        return fleetsN;
    }
}
