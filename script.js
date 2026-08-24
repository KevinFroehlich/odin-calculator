function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

let num1 = ""
let operator = ""
let num2 = ""
let resultNum

const operators = ["+", "-", "/", "*"]

function operate(num1, num2, operator) {
    switch(operator) {
        case "+" :
            return add(num1, num2)
            break
        case "-" :
            return subtract(num1, num2)
            break
        case "/" :
            return divide(num1, num2)
            break
        case "*" :
            return multiply(num1, num2)
            break            
    }
}

const ops = document.getElementById("operators")
operators.forEach(item => {
    let op = document.createElement("button")
    op.textContent = item
    op.classList = "operator"
    op.addEventListener("click", () => {
        if(num1 !== "" && num2 !== "") {
            calcResult()
            operator = op.textContent
            currentOperator.textContent = operator

        }
        if(num1 !== "") {
        operator = op.textContent
        display.textContent = num1 + " " + operator
        }
    })
    ops.append(op)
})
const currentOperator = document.getElementById("currentOperator")
const numbers = document.getElementById("numbers")

for( let i = 0; i < 10; i++) {
    let num = document.createElement("button")
    num.textContent = i
    num.addEventListener("click", () => {
    if(operator === "") {
        num1 += num.textContent
        display.textContent = num1
        
    } else {
        num2 += num.textContent
        display.textContent = num2
        
        
    }    
    })
    numbers.append(num)

}

function calcResult() {
    resultNum = Math.round(operate(Number(num1), Number(num2), operator) * 1000) / 1000 
       display.textContent = `${resultNum}`
        num1 = `${resultNum}`
        num2 = ""
}

const result = document.getElementById("result")
result.addEventListener("click", () => {
    if(num2 !== "") {

        calcResult()
        operator = ""
        currentOperator.textContent = operator
    }
})

const display = document.getElementById("display")

const clearButton = document.getElementById("clear")
clearButton.addEventListener("click", () => {
    operator = ""
    num1 = ""
    num2 = ""
    resultNum = undefined
    display.textContent = ""
})


