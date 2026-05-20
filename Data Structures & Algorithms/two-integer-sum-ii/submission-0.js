class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0, r = numbers.length - 1;
        while (l < r) {
            if (numbers[l] + numbers[r] < target) {
                l++;
                continue;
            }
            if (numbers[l] + numbers[r] > target) {
                r--;
                continue;
            }
            return [l + 1, r + 1];
        }       
    }
}
