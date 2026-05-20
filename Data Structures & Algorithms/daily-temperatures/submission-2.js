class Solution {
   /**
    * @param {number[]} temperatures
    * @return {number[]}
    */
   dailyTemperatures(temperatures) {
       // queue descending
       const res = new Array(temperatures.length).fill(0);
       const q = [];
       for (let i = 0; i < temperatures.length; i++) {
           // [30,38,30,35,40,28]
           // [30] -> []
           // [38] -> [1]
           // [38, 30] -> [1,n,n]
           // [38, 35] -> [1,n,1,n]
           // [40] -> [1,n,1,1,n] -> [1,3,1,1,n]
           // [] -> [1,3,1,1,0]
            while (q.length > 0 && temperatures[i] > q.at(-1)[1]) {
                const last = q.pop();
                res[last[0]] = i - last[0];
            }
            q.push([i, temperatures[i]]);
       }
       return res;
   }
}

