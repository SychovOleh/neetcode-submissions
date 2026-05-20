class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const columns = Array.from({length: 9}).map(() => ({}));
        const boxes = Array.from({length: 9}).map(() => ({}));
        let row = {};
        let boxI = 0;
        for (let rowI = 0; rowI < 9; rowI++) {
            for (let colI = 0; colI < 9; colI++) {
                const cell = board[rowI][colI];
                if (Number.isNaN(Number(cell))){
                    continue
                }

                boxI = this.getBoxI(colI, rowI);
                
                if (row[cell] || columns[colI][cell] || boxes[boxI][cell]) {
                    return false;
                }

                row[cell] = true;
                columns[colI][cell] = true;
                boxes[boxI][cell] = true;
            }
            row = {};
        }
        return true;
    }

    getBoxI(colI, rowI) {
        if (colI < 3 & rowI < 3) return 0;
        if (colI < 3 & rowI < 6) return 1;
        if (colI < 3) return 2;
        if (colI < 6 & rowI < 3) return 3;
        if (colI < 6 & rowI < 6) return 4;
        if (colI < 6) return 5;
        if (rowI < 3) return 6;
        if (rowI < 6) return 7;
        return 8
    }
}
// [["1","2",".",".","3",".",".",".","."],["4",".",".","5",".",".",".",".","."],[".","9","8",".",".",".",".",".","3"],["5",".",".",".","6",".",".",".","4"],[".",".",".","8",".","3",".",".","5"],["7",".",".",".","2",".",".",".","6"],[".",".",".",".",".",".","2",".","."],[".",".",".","4","1","9",".",".","8"],[".",".",".",".","8",".",".","7","9"]]