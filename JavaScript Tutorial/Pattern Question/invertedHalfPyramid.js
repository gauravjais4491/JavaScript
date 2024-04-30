const invertedHalfPyramid = (m) => {
    for (let i = m; i >= 1; i--) {
        let row = ''
        for (let j = 1; j <= i; j++) {
            row += '*'
        }
        console.log(row);
    }
}


invertedHalfPyramid(10)