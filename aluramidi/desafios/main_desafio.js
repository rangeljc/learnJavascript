const lista_teclas = document.querySelectorAll('input[type=button]');

const inputTel = document.querySelector('input[type=tel]');

for (i=0; i < lista_teclas.length; i++) {

    const tecla = lista_teclas[i];

    if (tecla.value == 'Limpar') {
        tecla.onclick = function () {
            inputTel.value = "";
        }
    }
    else {
        tecla.onclick = function () {
            inputTel.value = inputTel.value + tecla.value;
        }
    }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
    tecla.onmousedown = function () {
        tecla.classList.add('ativa');
    }
    tecla.onmouseup = function () {
        tecla.classList.remove('ativa');
    }

}
