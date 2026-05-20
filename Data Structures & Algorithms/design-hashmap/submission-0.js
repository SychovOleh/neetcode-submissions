class ListNode {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}
class MyHashMap {
    constructor() {
        this.map = Array.from({ length: 10031 }, () => new ListNode(-Infinity, -Infinity));
    }

    /**
     * @param {number} key
     * @return {number}
     */
    hash(key) {
        return key % this.map.length;
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cur = this.map[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next.value = value;
                return;
            }
            cur = cur.next;
        }
        cur.next = new ListNode(key, value);
    }


    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.map[this.hash(key)];
        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }
            cur = cur.next;
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cur = this.map[this.hash(key)];
        while (cur) {
            if (cur.key === key) {
                return cur.value;
            }
            cur = cur.next;
        }
        return -1;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
