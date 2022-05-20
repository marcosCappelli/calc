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

// Lógica
// Primeira ação add digit to calculator screen
// Método
addDigit(digit) {
    //Chega se a operação já tem um ponto operador "."
    if(digit === "." && this.currentOperationText.innerText.includes(".")) {
        return;
    }

    // console.log(digit); (((Esse comando serve apenas para mostrar valores )))
    this.currentOperation = digit //Ao clicar no digito se saberá qual a operação sendo realizada
    this.updateScreen() //método resposável por atualizar a tela
}

// Método
// Process all calculator operation
processOperation(operation) {

    //Obtem current and previous valkue
    let operationValue;
    const previous = +this.previusOperationText.innerText;
    const current = +this.currentOperationText.innerText;

    switch (operation) {
        case "+":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
        default:
            return;
    }
}


// Método
// Muda values of the calculator screen
updateScreen(operationValue = null, operation = null, current = null, previous = null) {
    //Propriedade
    this.currentOperationText.innerText += this.currentOperation; //todos os números digitados irão aparecer na tela
}

}

/*Instância*/
const calc = new calculator(previusOperationText, currentOperationText);

/*Método*/
buttons.forEach((btn)  => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        /*Se valor for maior ou igual a zero e valor igual a ponto console = valor*/
        if (+value >= 0 || value === ".") { 
            calc.addDigit(value);
            // console.log(value); (((esse linha foi substituida pela de cima))) 
        } else { /*senão valor op + valor*/
            calc.processOperation(value);
        }
    });
});