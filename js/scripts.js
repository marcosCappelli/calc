/*Instância*/
const previusOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class calculator {
    constructor(previusOperationText, currentOperationText) {
        this.previusOperationText = previusOperationText /*valor que está sempre impresso na tela*/
        this.currentOperationText = currentOperationText /*valor que está sempre impresso na tela*/
        this.currentOperation = "" /*valor digitado no momento*/
    }
/*Método*/
addDigit(digit) {

}

}



/*Instância*/
const calc = new calculator(previusOperationText, currentOperationText);





buttons.forEach((btn)  => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        /*Se valor for maior ou igual a zero e valor igual a ponto console = valor*/
        if (+value >= 0 || value === ".") { 
            console.log(value);
        } else { /*senão valor op + valor*/
            console.log("op: " + value)
        }
    });
});