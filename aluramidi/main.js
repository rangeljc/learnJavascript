function tocar_som(id_botao) {
    
    const elemento = document.querySelector(id_botao);
    
    if (elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        alert('Elemento inválido para a operação');
    }
    
}

const lista_teclas = document.querySelectorAll('.tecla');

for (i=0; i < lista_teclas.length; i++) {

    const tecla = lista_teclas[i];
    const botao = `#som_${tecla.classList[1]}` //template string
    
    tecla.onclick = function () {
        tocar_som(botao);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.remove('ativa');
        }
    }

}
