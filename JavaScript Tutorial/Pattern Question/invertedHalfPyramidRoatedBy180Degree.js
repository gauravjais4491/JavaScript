const invertedHalfPyramidRotaedBy180Degree = (m) => {
    for (let i = 0; i < m; i++) {
        let row = ''
        for (let j = 0; j < m; j++) {
            if (i <= j) {
                row += '*'
            }
            else {
                row += ' '
            }
        }
        console.log(row);
    }
}

const invertedHalfPyramidRotaedBy180Degree1 = (m) => {
    for (let i = 1; i <= m; i++) {
        let row = ''
        for (let j = m; j >= i; j--) {
            row += '*'
        }
        console.log(row);
    }
}

invertedHalfPyramidRotaedBy180Degree1(4)