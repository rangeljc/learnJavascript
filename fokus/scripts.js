const html = document.querySelector('html');
const foco_bt = document.querySelector('.app__card-button--foco');
const curto_bt = document.querySelector('.app__card-button--curto');
const longo_bt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const titulo_destaque = document.querySelector('.app__title-strong');
const temporizador = document.querySelector('#timer');
const botoes = document.querySelectorAll('.app__card-button');
const start_pause = document.querySelector('#start-pause');
const play_pause_bt = document.querySelector('#start-pause span');
const icone_botao = document.querySelector('.app__card-primary-button-icon')

const som_play = new Audio('./sons/play.wav');
const som_pause = new Audio('./sons/pause.mp3');
const som_encerrado = new Audio('./sons/beep.mp3');

const musica_foco = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

let tempo_decorrido = 1500;
let intervalo_id = null;

musica_foco.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

foco_bt.addEventListener('click', () => {
    tempo_decorrido = 1500;
    alterar_contexto('foco');
    foco_bt.classList.add('active');
});

curto_bt.addEventListener('click', () => {
    tempo_decorrido = 300;
    alterar_contexto('descanso-curto');
    curto_bt.classList.add('active');
});

longo_bt.addEventListener('click', () => {
    tempo_decorrido = 900;
    alterar_contexto('descanso-longo');
    longo_bt.classList.add('active');
});


function alterar_contexto(contexto) {
    
    mostrar_tempo();

    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    
    switch (contexto) {
        case 'foco':        
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        
        case 'descanso-curto':
            titulo.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
            break;

        case 'descanso-longo':
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            break;

        default:
            break;
    }
}

const contagem_regressiva = () => {
    if (tempo_decorrido <= 0) {
        zerar();
        console.log('Temporizador: 0 - Tempo encerrado!');
        tempo_decorrido = 5
        som_encerrado.play();
        return
    }
    console.log('Temporizador: ' + tempo_decorrido);
    mostrar_tempo();
    tempo_decorrido -= 1;
}

start_pause.addEventListener('click', iniciar);

function iniciar() {
    if (intervalo_id){
        som_pause.play();
        zerar();
        return
    }
    som_play.play();
    intervalo_id = setInterval(contagem_regressiva, 1000); //1000 equivale a 1 seg.
    play_pause_bt.textContent = 'Pausar';
    icone_botao.src = './imagens/pause.png';
}

function zerar() {
    clearInterval(intervalo_id)
    play_pause_bt.textContent = 'Começar';
    icone_botao.src = './imagens/play_arrow.png'
    intervalo_id = null;
}


function mostrar_tempo () {
    const tempo = new Date(tempo_decorrido * 1000);
    const tempo_formatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    temporizador.innerHTML = `${tempo_formatado}`;
}

mostrar_tempo();