function enviar() {
    var dinheiro = Number(window.document.querySelector('.doar').value)
    var res = document.querySelector('.res');

    if (dinheiro > 0) {
        res.innerHTML = `Obrigado pela doação de R$${dinheiro}`;
    } else {
        res.innerHTML = "Por favor, insira um valor válido para doar.";
    }
}
