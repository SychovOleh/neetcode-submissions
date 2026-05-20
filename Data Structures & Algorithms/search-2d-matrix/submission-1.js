class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = matrix.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (target > matrix[m].at(-1)) {
                l = m + 1;
            } else if (target < matrix[m].at(0)) {
                r = m - 1;
            } else {
                return this.searchInRow(matrix[m], target);
            }
        }
        return false
    }
    
    searchInRow(row, target) {
        let l = 0;
        let r = row.length - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (row[m] > target) {
                r = m - 1;
            } else if (row[m] < target) {
                l = m + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
