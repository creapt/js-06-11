const sum = (x, y) => {
    if (x == null || y == null) {
        return 'something wrong'
    } else if (typeof x == 'undefined' || typeof y == 'undefined') {
        return 'something wrong'
    } else if (typeof x == 'string' || typeof y == 'string') {
        return 'calc can\'t using string!'
    }
    return x + y;
}

const sub = (x, y) => {
    if (x == null || y == null) {
        return 'something wrong'
    } else if (typeof x == 'undefined' || typeof y == 'undefined') {
        return 'something wrong'
    } else if (typeof x == 'string' || typeof y == 'string') {
        return 'calc can\'t using string!'
    }
    return x - y;
}
const div = (x, y) => {
    if (x == null || y == null) {
        return 'something wrong'
    } else if (typeof x == 'undefined' || typeof y == 'undefined') {
        return 'something wrong'
    } else if (typeof x == 'string' || typeof y == 'string') {
        return 'calc can\'t using string!'
    } else if (y == 0) {
        return 'you can\'t divide by zero!'
    }
    return x / y;
}
const mult = (x, y) => {
    if (x == null || y == null) {
        return 'something wrong'
    } else if (typeof x == 'undefined' || typeof y == 'undefined') {
        return 'something wrong'
    } else if (typeof x == 'string' || typeof y == 'string') {
        return 'calc can\'t using string!'
    }
    return x * y;
}

// export default {
//     sum,
//     sub,
//     div,
//     mult
// }

module.exports = {
    sum,
    sub,
    div,
    mult
};