const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const limparLista = document.getElementById('limparLista')

var itens = {
    'itens': JSON.parse(localStorage.getItem('itens')),
    'quantidades': JSON.parse(localStorage.getItem('quantidades'))
}

if (itens['itens'] === null){
    itens = {
        'itens': [], 
        'quantidades': []
    }
}
else {
    atualizaLista(itens)
}

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    
    const item = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    
    if (itens['itens'].includes(item.value)){
        atualizaItem(item.value, quantidade.value)
    }
    else {
        criaItem(item.value, quantidade.value)
        armazenaStorage(item.value, quantidade.value)
    }
    item.value = ''
    quantidade.value = ''
    
})


function criaItem(item, quantidade) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item

    novoItem.appendChild(excluirItem(item))

    lista.appendChild(novoItem)   
}


function excluirItem(item) {
    const btExcluir = document.createElement('button')
    btExcluir.innerText = 'X'
    btExcluir.onclick = function() {
        apagaItem(item)
        this.parentNode.remove()
    }
    return btExcluir
}

function apagaItem(item) {
    indice = itens['itens'].findIndex(i => i == item)
    
    itens['itens'].splice(indice, 1)
    itens['quantidades'].splice(indice, 1)

    if (itens['itens'].length === 0){
        localStorage.clear()
    } else {
        localStorage.setItem('itens', JSON.stringify(itens['itens']))
        localStorage.setItem('quantidades', JSON.stringify(itens['quantidades']))
    }
}


function atualizaItem(item, quantidade){
    indice = itens['itens'].findIndex(i => i == item)
    novoValor = itens['quantidades'][indice] + parseInt(quantidade, 10)
    
    itens['quantidades'][indice] = novoValor
    
    localStorage.setItem('quantidades', JSON.stringify(itens['quantidades']))
    location.reload()
}


function armazenaStorage(item, quantidade){

    itens['itens'].push(item)
    itens['quantidades'].push(parseInt(quantidade, 10))
    
    localStorage.setItem('quantidades', JSON.stringify(itens['quantidades']))
    localStorage.setItem('itens', JSON.stringify(itens['itens']))

}


function atualizaLista(itens) {
    for (i=0; i<itens['itens'].length; i++){
        criaItem(itens['itens'][i], itens['quantidades'][i])
    }
}

limparLista.onclick = function() {
    localStorage.clear()
    location.reload()
}