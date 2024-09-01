
//Write a program to perform matrix multiplication between a 3x3 matrix and a 2x3 matrix. 


/*
Matrix 1:
1 2 3
4 5 6
7 8 9

Matrix 2:
1 2 3
4 5 6
7 8 9
*/



const matrixMultiplication = (matrix1, matrix2) => {
    let result = []
    for (let i = 0; i < 3; i++) {
        let temp = 0
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                temp += matrix1[i][k] * matrix2[k][i]
            }
        }
        result[i].push(temp)
    }
    return result
}

let matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrixMultiplication(matrix1, matrix2));
