const html = document.querySelector('html');
const foco_bt = document.querySelector('.app__card-button--foco');
const curto_bt = document.querySelector('.app__card-button--curto');
const longo_bt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')



foco_bt.addEventListener('click', () => {
    alterar_contexto('foco');
    foco_bt.classList.add('active');
});

curto_bt.addEventListener('click', () => {
    alterar_contexto('descanso-curto');
    curto_bt.classList.add('active');
});

longo_bt.addEventListener('click', () => {
    alterar_contexto('descanso-longo');
    longo_bt.classList.add('active');
});


function alterar_contexto(contexto) {
    
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