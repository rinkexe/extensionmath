namespace basic {
    //% block
    export function divide(array: number[]) {
        let add = 0
        add = 0
        for (let value of array) {
            add += array[value]
        }
        return add / array.length
    }
}
