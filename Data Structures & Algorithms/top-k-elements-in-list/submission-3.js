class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // counts hasmap O(n)
        // bucket sort List<count, List<num>> 

        const counts = {};
        for (let num of nums) {
            counts[num] = (counts[num] ?? 0) + 1;
        }

        const freq = [];
        const countsMap = Object.entries(counts);
        for(let i = 0; i < countsMap.length; i++) {
            const [num, count] = countsMap[i];
            if (!freq[count]) {
                freq[count] = [];
            }
            freq[count].push(num);
        }

        const res = [];
        for (let i = freq.length - 1; res.length < k; i--) {
            if (freq[i] === undefined) {
                continue;
            }
            for (let j = 0; j < freq[i].length; j++) {
                res.push(freq[i][j]);
            }
        }
        return res;
    }
} 
