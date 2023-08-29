function tocar_som() {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocar_som;

document.querySelectorAll('.tecla').item(0).onclick = tocar_som;