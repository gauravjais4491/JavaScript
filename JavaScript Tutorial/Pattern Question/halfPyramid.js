const halfPyramid = (m) => {
    for (let i = 0; i < m; i++) {
        let row = ''
        for (let j = 0; j < i; j++) {
            row += '*'
        }
        console.log(row);
    }
}
halfPyramid(10)