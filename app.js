let qtdNumero = document.getElementById('quantidade');
let deMenorNumero = document.getElementById('de');
let ateMaiorNumero = document.getElementById('ate');
let botaoReiniciar = document.getElementById('btn-reiniciar');

function sortear() {
    let de = parseInt(deMenorNumero.value);
    let ate = parseInt(ateMaiorNumero.value);
    let qtd = parseInt(qtdNumero.value);

    if (isNaN(de) || isNaN(ate) || isNaN(qtd) || de > ate || qtd <= 0) {
        exibirTextoNaTela('resultado', '⚠️ Preencha corretamente os campos!');
        return;
    }

    // Verifica se o intervalo é suficiente para sortear a quantidade desejada sem repetições
    if (qtd > (ate - de + 1)) {
        exibirTextoNaTela('resultado', '⚠️ Intervalo insuficiente para a quantidade de números únicos!');
        return;
    }

    let numerosSorteados = [];

    while (numerosSorteados.length < qtd) {
        let numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }

    exibirTextoNaTela('resultado', 'Números sorteados: ' + numerosSorteados.join(', '));

    // Ativa botão reiniciar
    botaoReiniciar.disabled = false;
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}


function exibirTextoNaTela(resultado, texto) {
    let campo = document.getElementById(resultado);
    campo.textContent = texto;
}

function reiniciar() {
    qtdNumero.value = '';
    deMenorNumero.value = '';
    ateMaiorNumero.value = '';
    exibirTextoNaTela('resultado', 'Números sorteados: nenhum até agora');

    // Desativa botão reiniciar
    botaoReiniciar.disabled = true;
    botaoReiniciar.classList.remove('container__botao');
    botaoReiniciar.classList.add('container__botao-desabilitado');
}
