export function isDataArray(data) {
    return Array.isArray(data) && data.length
}

export function getTotalPrice(array, amount) {
    let summ = 0;
    array.farEach(elem => summ += elem.price * amount)
    return summ
}