function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd');

    comprarIngresso(parseInt(qtd.value), tipoIngresso.value);
}

function comprarIngresso(quantidade, tipo) {
    let qtdSetor = document.getElementById(`qtd-${tipo}`);
    if(quantidade > qtdSetor.textContent || quantidade <= 0 || isNaN(quantidade)) {
        alert('Quantidade indisponível.')
    } else {
        qtdSetor.textContent -= quantidade;
        alert('Compra realizada com sucesso!')
    }
}