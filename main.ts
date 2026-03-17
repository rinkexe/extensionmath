let add = 0
function divide (array: number[]) {
    add = 0
    for (let value of array) {
        add += array[value]
    }
    return add / array.length
}
