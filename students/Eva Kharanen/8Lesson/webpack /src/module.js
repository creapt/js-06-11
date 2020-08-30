const sum = (x, y) => {
    if (x === null || y === null){
        return null;
    }
    return x + y;
}
const multiplication = (x, y) => {
    if (x === null || y === null){
        return null;
    }
    return x * y;
}
const division = (x, y) => {
    if (x === null || y === null){
        return null;
    }
    return x / y;
}
const subtraction = (x, y) => {
    if (x === null || y === null){
        return null;
    }
    return x - y;
}
export default {
    sum,
    multiplication,
    division,
    subtraction
}

