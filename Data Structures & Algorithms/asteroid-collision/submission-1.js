class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const res = [];

        for (let i = 0; i < asteroids.length; i++) {
            if (asteroids[i] > 0) {
                res.push(asteroids[i]);
                continue;
            }
            
            let r = Math.abs(asteroids[i]);
            while (true) {
                const l = res.pop();
                if (!l) {
                    res.push(asteroids[i]);
                    break;
                } else if (l < 0) {
                    res.push(l);
                    res.push(asteroids[i]);
                    break;
                } else if (r === l) {
                    break;
                } else if (r > l) {
                    continue;
                } else {
                    res.push(l);
                    break;
                }
            }
        }
        
        return res;
    }
}
