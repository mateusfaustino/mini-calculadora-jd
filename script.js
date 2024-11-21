function getNumber1(){
    let $input1 = document.getElementById("num1")
    let inputValue = $input1.value
    return Number(inputValue)
}

function getNumber2(){
    let $input2 = document.getElementById("num2")
    let inputValue = $input2.value
    return Number(inputValue)
}

function atualizarDisplay(valor){
    let $display = document.getElementById("display")
    $display.innerText = valor
}

function somar(){
    let num1 = getNumber1()
    let num2 = getNumber2()

    let soma = num1 + num2
    atualizarDisplay(soma)
}
function subtrair(){
    let num1 = getNumber1()
    let num2 = getNumber2()

    let subtracao = num1 - num2
    atualizarDisplay(subtracao)
}

function multiplicar() {
    let num1 = getNumber1()
    let num2 = getNumber2()

    let multiplicacao = num1 * num2

    atualizarDisplay(multiplicacao)
}
function dividir() {
    let num1 = getNumber1()
    let num2 = getNumber2()

    if(num2==0){
        atualizarDisplay("Impossível")
        return
    }

    let divisao = num1 / num2

    atualizarDisplay(divisao)
}