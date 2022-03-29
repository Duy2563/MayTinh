var Calculator = new Object()

Calculator.numberOne = null;

Calculator.numberTwo = null;

Calculator.calculation = null;

Calculator.result = null;

Calculator.nhap = function (x) {
    if (this.numberOne == null) {
        this.numberOne = x;
        document.getElementById('numberOne').innerHTML = x
    } else {
        this.numberTwo = x;
        document.getElementById('numberTwo').innerHTML = x
    }

}

Calculator.phepTinh = function (x) {
    Calculator.calculation = x;
    document.getElementById('calculation').innerHTML = Calculator.calculation
}

Calculator.thucHien = function () {
    if (Calculator.calculation == '+') {
        this.kq = this.numberOne + this.numberTwo;
    }
    if (Calculator.calculation == '-') {
        this.kq = this.numberOne - this.numberTwo;
    }
    if (Calculator.calculation == '*') {
        this.kq = this.numberOne * this.numberTwo;
    }
    if (Calculator.calculation == ':') {
        this.kq = this.numberOne / this.numberTwo;
    }
    document.getElementById('result').innerHTML = this.kq;

}

Calculator.lamlai = function () {
    location.reload();

}