function sum(num1, num2) {
    return num1 + num2;
}

//cuando recibimos una función como parámetro le ponemos
//callback como estándar
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6,2,sum));

function date(callback) {
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);