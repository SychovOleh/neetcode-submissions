class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let maxSeq = 0;
        
        for (let n of numsSet.values()) {
            if (!numsSet.has(n - 1)) {
                let cur = n;
                while (numsSet.has(cur + 1)) {
                    cur += 1;
                }
                maxSeq = Math.max(maxSeq, cur - n + 1);
            }
        }

        return maxSeq;
    }
}
