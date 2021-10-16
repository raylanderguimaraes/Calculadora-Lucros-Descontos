/* Pegar o preço cheio da peça, informar o desconto em % oferecido pela loja, em cima desse valor final calcular o percentual descontado de tarifa pelo banco com base no valor absoluto em R$.
*/

/* depois de calculado isso, pegar o valor final recebido pela loja, subtrair o custo, e dividir o restante em 3 partes iguais. */

let inputPrecoCheio = document.getElementById("preco");
let inputDesconto = document.getElementById("descontoInicio");
let inputDescontoBanco = document.getElementById("descontoBanco");
let inputCusto = document.getElementById("custo");

function calcular() {


    let preco = inputPrecoCheio.value;
    let desconto = inputDesconto.value;
    let decBanco = inputDescontoBanco.value;
    let custo = inputCusto.value;

    let resultado = document.getElementById("resultado");
    let descontoInicio = (preco - (preco * desconto) / 100);
    let descontoBanco = (decBanco * 100) / descontoInicio;
    let valorRecebido = descontoInicio - decBanco;
    let lucroDividido = (valorRecebido - custo) / 3;

    /*console.log(descontoInicio);
    console.log(descontoBanco);
    console.log(lucroDividido);*/


    resultado.innerHTML = `<p>${descontoInicio.toFixed(2)} Valor da peça pro cliente</p>`
    resultado.innerHTML += `<p>${descontoBanco.toFixed(2)} % descontado pelo banco</p>`
    resultado.innerHTML += `<p>${lucroDividido.toFixed(2)} para as três partes </p>`

}
















