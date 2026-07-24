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
        let list = this.keyStore.get(key);
        if (!list) {
            list = [];
            this.keyStore.set(key, list);
        }
        list.push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const list = this.keyStore.get(key);
        if (!list) {
            return '';
        }
        // if (list.at(-1)[0] < timestamp) {
        //     return list.at(-1)[1];
        // }
        let l = 0;
        let r = list.length - 1;
        let prev;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (list[m][0] > timestamp) {
                r = m - 1;
            } else if (list[m][0] < timestamp) {
                if (!prev) {
                    prev = list[m]
                } else {
                    prev = Math.max(prev[0], list[m][0]);
                }
                l = m + 1;
            } else {
                return list[m][1];
            }
        }
        return prev ? prev[1] : '';
    }
}
