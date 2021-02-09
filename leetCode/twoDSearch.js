var searchMatrix = function(matrix, target) {
    let row;
    // find the row
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === target) return true;
        if (matrix[i][0] > target) {
            if (i === 0) return false;
            row = matrix[i - 1];
            break;
        }
        if (i === matrix.length - 1) {
            if (matrix[i][matrix[i].length - 1] >= target) {
                if (matrix[i][matrix[i].length - 1] === target) return true;
                row = matrix[i];
            } else {
                return false;
            }
        }
    }

    // check if the number is in the row
    let index = 0;
    while (row[index] <= target) {
        if (row[index] === target) return true;
        index++;
    }
    return false;
};