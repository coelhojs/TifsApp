const normalizePhone = (value, previousValue) => {
    if (!value) {
        return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
        // typing forward
        if (onlyNums.length === 2) {
            return '(' + onlyNums + ')'
        }
        if (onlyNums.length <= 10) {
            return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.slice(2, 10)
        }
        if (onlyNums.length === 11) {
            return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.slice(2, 11)
        }
    }
    if (onlyNums.length <= 2) {
        return onlyNums
    }
    if (onlyNums.length <= 10) {
        return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.slice(2, 10)
    }
    return '(' + onlyNums.slice(0, 2) + ')' + onlyNums.slice(2, 11)
}

export default normalizePhone
