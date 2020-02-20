
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let result = array[0];

        array.forEach(element => {
            if (result > element) {
                result = element;
            }
        });

        return result;
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let result = array[0];

        array.forEach(element => {
            if (result < element) {
                result = element;
            }
        });

        return result;
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let result = array.reduce((sum, current) => sum + current, 0);
        return result / array.length;
    }
}
