const lista_teclas = document.querySelectorAll('input[type=button]');

const inputTel = document.querySelector('input[type=tel]');

for (i=0; i < lista_teclas.length; i++) {

    const tecla = lista_teclas[i];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    }

}
