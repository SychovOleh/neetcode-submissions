class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            cars.push([position[i], speed[i]]);
        }
        cars.sort((a, b) => a[0] - b[0]);
        let fleets = 1;
        let nextTime = (target - cars.at(-1)[0]) / cars.at(-1)[1];
        for (let i = cars.length - 2; i >= 0; i--) {
            const time = (target - cars[i][0]) / cars[i][1];
            if (time > nextTime) {
                fleets += 1;
                nextTime = time;
            }
        }
        return fleets;
    }
}