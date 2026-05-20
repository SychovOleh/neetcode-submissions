/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        this.divideAndMerge(pairs, 0, pairs.length - 1);
        return pairs
    }

    divideAndMerge(pairs, l, r) {
        if (r - l <= 0) {
            return;
        }
        // 0 1 2 3 4 5 6
        const m = Math.floor((l + r) / 2);
        
        this.divideAndMerge(pairs, l, m);
        this.divideAndMerge(pairs, m + 1, r);
        this.merge(pairs, l, m, r)
    }

    merge(pairs, s, m, e) {
        const L = pairs.slice(s, m + 1);
        const R = pairs.slice(m + 1, e + 1);
        
        let i = s;
        let l = 0;
        let r = 0;
        while (l < L.length && r < R.length) {
            if (L[l].key <= R[r].key) {
                pairs[i] = L[l];
                l++;
            } else {
                pairs[i] = R[r];
                r++;
            }
            i++;
        }
        while (l < L.length) {
            pairs[i] = L[l];
            l++;
            i++;
        }
        while (r < R.length) {
            pairs[i] = R[r];
            r++;
            i++;
        }
    }
}
