export function isDataArray(data) {
    return Array.isArray(data) && data.length
}

export function getTotalPrice(array) {
    let summ = 0;
    array.map(elem => summ += elem.price * elem.amount)
    return summ
}