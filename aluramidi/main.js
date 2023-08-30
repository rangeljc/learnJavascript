function tocar_som(id_botao) {
    document.querySelector(id_botao).play();
}

const lista_teclas = document.querySelectorAll('.tecla');

/*
let i = 0;

while (i < lista_teclas.length){
    
    const tecla = lista_teclas[i];
    const botao = `#som_${tecla.classList[1]}` //template string
    tecla.onclick = function () {
        tocar_som(botao);
    }
    i += 1;
}
*/

for (i=0; i < lista_teclas.length; i++) {

    const tecla = lista_teclas[i];
    const botao = `#som_${tecla.classList[1]}` //template string
    tecla.onclick = function () {
        tocar_som(botao);
    }
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
