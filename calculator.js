let calculatorDisplayElement = document.getElementById("calculatorDisplay");

function allClearBtn() {
    calculatorDisplayElement.value = "";
}

function clearBtn() {
    calculatorDisplayElement.value = calculatorDisplayElement.value.slice(0, -1)
}

function show(n) {
    calculatorDisplayElement.value += n;

}

function calculate() {
    calculatorDisplayElement.value = eval(calculatorDisplayElement.value);
}