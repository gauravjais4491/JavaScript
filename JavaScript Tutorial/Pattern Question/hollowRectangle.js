const hollowRectangle = (m, n) => {
    for (let i = 1; i <= m; i++) {
        let row = ''
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === m || j === 1 || j === n) {
                row += '*'
            }
            else {
                row += ' '
            }
        }
        console.log(row);
    }
}

hollowRectangle(5, 10)