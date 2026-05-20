class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => b - a);
        
        let boats = 0;
        let [l, r] = [0, people.length - 1];
        while (l <= r) {
            if (people[l] + people[r] <= limit) {
                l++;
                r--;
            } else {
                l++;
            }
            boats++;
        }

        return boats;
    }
}
