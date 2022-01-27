function plus(val1, val2) {
    return (val1 + val2);
}

function minus(val1, val2) {
    return (val1 - val2);
}

function multiply(val1, val2) {
    return (val1 * val2);
}

function divide(val1, val2) {
    return (val1 / val2);
}

function mod(val1, val2) {
    return (val1 % val2);
}

function calc() {
    var solution;
    var no1 = document.getElementById("value1").value;
    var no2 = document.getElementById("value2").value;
    var final = document.getElementById("result").value;
    if ((no1 == null || no1 == "") && (no2 == null || no2 == "")) {
        document.getElementById("main-result").innerHTML = "Please Fill All Required Field";
        return false;
    } else if (no1 == null || no1 == "") {
        document.getElementById("main-result").innerHTML = "Value 1 can't be blank";
        return false;
    } else if (no2 == null || no2 == "") {
        document.getElementById("main-result").innerHTML = "Value 2 can't be blank";
        return false;
    } else if (isNaN(no1) || isNaN(no2)) {
        document.getElementById("main-result").innerHTML = "input must be number";
        return false;
    }

    var number1 = parseInt(document.getElementById("value1").value);
    var number2 = parseInt(document.getElementById("value2").value);
    //document.getElementById("resul").innerHTML=w;
    switch (final) {
        case 'add':
            solution = plus(number1, number2);
            document.getElementById("main-result").innerHTML = "Addition is: " + solution;
            break;
        case 'minus':
            solution = minus(number1, number2);
            document.getElementById("main-result").innerHTML = "Subtraction is: " + solution;
            break;
        case 'multiply':
            solution = multiply(number1, number2);
            document.getElementById("main-result").innerHTML = "Multiplication is: " + solution;
            break;
        case 'divide':
            solution = divide(number1, number2);
            document.getElementById("main-result").innerHTML = "Division is: " + solution;
            break;
        case 'mod':
            solution = mod(number1, number2);
            document.getElementById("main-result").innerHTML = "Modulo is: " + solution;
            break;
        default:
            solution = "Don't really know..";
    }

}