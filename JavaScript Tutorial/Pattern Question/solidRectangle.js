const solidRectangle = (m, n) => {
    for (let i = 0; i < m; i++) {
        let row = ''
        for (let j = 0; j < n; j++) {
            row += '*'
        }
        console.log(row);
    }
}

solidRectangle(5, 10)