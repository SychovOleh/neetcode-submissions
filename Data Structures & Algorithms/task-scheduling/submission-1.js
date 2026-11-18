class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let counts = new Array(26).fill(0);
        for (let t of tasks) {
            counts[t.charCodeAt() - 'A'.charCodeAt()] += 1;
        }
        counts = counts.filter(v => v);
        
        const heap = new PriorityQueue((a, b) => b - a, counts)
        // [task, when can run]
        const idle = new Queue();
        let i = 0;
        while (heap.size() > 0 || idle.size() > 0) {
            while (idle.front() && idle.front()[1] <= i) {
                heap.push(idle.pop()[0]);
            }
            const taskCanadidate = heap.pop();
            if (taskCanadidate) {
                if (taskCanadidate > 1) {
                    idle.push([taskCanadidate - 1, i + n + 1]);
                }
            }
            i++;
        }
        return i;
    }
}
