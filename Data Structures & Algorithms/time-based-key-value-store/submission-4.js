class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const val = this.keyStore.get(key) ?? [];
        val.push([timestamp, value]);
        this.keyStore.set(key, val);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const vals = this.keyStore.get(key);
        if (!vals || timestamp < vals[0][0]) return '';

        let l = 0;
        let r = vals.length - 1;
        let res = '';
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (timestamp === vals[m][0]) return vals[m][1];
            if (timestamp < vals[m][0]) {
                r = m - 1;
                
            // } else if (vals[m + 1] && timestamp < vals[m + 1][0]) {
            //     return vals[m][1];
            // } else if (timestamp > vals[r][0]) {
            //     return vals[r][1];
            } else {
                res = vals[m][1]
                l = m + 1;
            }
        }
        return res;
    }
}
