class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let counts = new Array(26).fill(0);
        for (let t of tasks) {
            counts[t.charCodeAt() - 'A'.charCodeAt(t)] += 1;
        }
        counts = counts.filter(v => v);
        
        const heap = new PriorityQueue((a, b) => b - a, counts);
        // [task, when can run]
        const idle = new Queue();
        let i = 0;
        while (true) {
            while (idle.front() && idle.front()[1] <= i) {
                heap.push(idle.pop()[0]);
            }
            const taskCanadidate = heap.front();
            if (!taskCanadidate && idle.size() === 0) {
                break;
            } else if (taskCanadidate) {
                const taskCount = heap.pop() - 1;
                idle.push([taskCount, i + n]);
            }
            i++;
        }
        return i;
    }
}
