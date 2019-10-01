const multiply = (a, b) => {

    let resultArray = Array(a.length + b.length + 1).fill(0);

    const A = a.split('').reverse();
    const B = b.split('').reverse();

    for (let i = 0; i < A.length; i ++ ) {
        for (let j = 0; j < B.length; j ++) {
            const divisionResult = A[i] * B[j];
            resultArray[i + j] += divisionResult;
        }
    }

    for (let i = 0; i < resultArray.length; i ++) {
        if (resultArray[i] > 9) {
            resultArray[i + 1] += Math.floor(resultArray[i] / 10);
            resultArray[i] = resultArray[i] % 10
        }
    }
    
    return resultArray.reverse().join('').replace(/^0+/, '');
}

module.exports = multiply;
//const result = multiply('329568934658432659586', '58379426534596');

//console.log(result);
//console.log( 25 * 136)

