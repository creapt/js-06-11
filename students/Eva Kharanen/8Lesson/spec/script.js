
$(document).ready(function () {

    // VARIABLES

    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual = calc.find('.calculator__key--equal');
    // var calcPower = calc.find('.calculator__power');
    var calcSpace = calc.find('.calculator__backspace');

    // INIT CALC KEYS
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    // ADD NUMBERS TO INPUT
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    // CLEAR INPUT
    calcClear.on('click', function () {
        calcDisplay.val('');
    });
    //
    // SHOW RESULT
    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    // BACKSPACE BUTTON
    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});

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
module.exports = {
    sum,
    multiplication,
    division,
    subtraction
}

