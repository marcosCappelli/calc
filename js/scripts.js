/*Instância*/
const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText /*valor que está sempre impresso na tela*/
        this.currentOperationText = currentOperationText /*valor que está sempre impresso na tela*/
        this.currentOperation = "" /*valor digitado no momento*/
    }

// Lógica
// Primeira ação add digit to calculator screen
// Método
addDigit(digit) {
    //Checa se a operação já tem um ponto operador "."
    if(digit === "." && this.currentOperationText.innerText.includes(".")) {
        return;
    }

    // console.log(digit); (((Esse comando serve apenas para mostrar valores )))
    this.currentOperation = digit //Ao clicar no digito se saberá qual a operação sendo realizada
    this.updateScreen() //método resposável por atualizar a tela
}

// Método
// Process all calculator operation
processOperation(operations) {
    //Checar se current esta vazia
    if (this.currentOperationText.innerText === "" && operations !== "C") { 
         // Mudança operation
        if (this.previousOperationText.innerText !== "") { 
            this.changeOperation(operations);
        }
        return;
    }


    //Obtem current and previous valkue
    let operationValue;
    const previous = +this.previousOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch (operations) {
        case "+":
            operationValue = previous + current;
            this.updateScreen(operationValue, operations, current, previous);
            break;
        case "-":
            operationValue = previous - current;
            this.updateScreen(operationValue, operations, current, previous);
            break;
        case "/":
            operationValue = previous / current;
            this.updateScreen(operationValue, operations, current, previous);
            break;
        case "*":
            operationValue = previous * current;
            this.updateScreen(operationValue, operations, current, previous);
            break;
        case "DEL":
            this.processDelOperator();
            break;
        case "CE":
            this.processClearCurrentOperation();
            break;
        case "C":
            this.processClearOperation();
            break; 
        case "=":
            this.processEqualOperator();
            break;       
        default:
            return;
    }
}
// Método
// Muda values of the calculator screen
updateScreen(
    operationValue = null, 
    operation = null, 
    current = null, 
    previous = null
    ) {
    
    //Propriedade
    if(operationValue === null) {
        this.currentOperationText.innerText += this.currentOperation; //todos os números digitados irão aparecer na tela
    } else {
            //Check if value is zero, if it is just add current value
            if( previous === 0) {
                operationValue = current
            }

            //Add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`; 
            this.currentOperationText.innerText = "";
    }   
}

// change math operation
changeOperation(operations) {
    const mathOprations = ["*", "/", "+", "-"]

    if (!mathOprations.includes(operations)) {
        return
    }
        // 123 Operation = função do slice é substituir o caracter
    this.previousOperationText.innerText = 
        this.previousOperationText.innerText.slice(0, -1) + operations;
}

// Deleta o último digito
processDelOperator() {
    this.currentOperationText.innerText =
        this.currentOperationText.innerText.slice(0, -1);
}

// Limpa current operation
processClearCurrentOperation() {
    this.currentOperationText.innerText = "";
}

// Limpa all operation
processClearOperation() {
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
}

// process an oparation
processEqualOperator() {
    const operation = previousOperationText.innerText.split(" ")[1];

    this.processOperation(operation);
}
}
/*Instância*/
const calc = new calculator(previousOperationText, currentOperationText);

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