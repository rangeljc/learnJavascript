// para este caso, a constante itens é um lista em que cada item é gravado
// como um dicionário com as informações desejadas.
const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const limparLista = document.getElementById('limparLista')

const itens = JSON.parse(localStorage.getItem('mochila')) || []

if (itens.length > 0){
    atualizaLista(itens)
}

form.addEventListener('submit', (evento) =>{
    evento.preventDefault()
    
    const item = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']   
    const itemAtual = {
        'item': item.value,
        'quantidade': parseInt(quantidade.value, 10)
    }

    const existe = itens.find( elemento => elemento.item === itemAtual.item )

    console.log(existe)

    if (existe){
        atualizaItem(itemAtual)
    }
    else {
        criaItem(itemAtual)
        armazenaStorage(itemAtual)
    }
    item.value = ''
    quantidade.value = ''
    
})


function criaItem(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item['quantidade'].toString()

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item['item']

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
    const i = itens.findIndex(elemento => elemento.item === item.item)

    itens.splice(i, 1)
    
    if (itens.length === 0){
        localStorage.clear()
    } else {
        localStorage.setItem('mochila', JSON.stringify(itens))
    }
}


function atualizaItem(item){
    const i = itens.findIndex(elemento => elemento.item === item.item)
    
    novoValor = itens[i]['quantidade'] + item['quantidade']
    
    itens[i]['quantidade'] = novoValor
    
    localStorage.setItem('mochila', JSON.stringify(itens))
    location.reload()
}


function armazenaStorage(item){

    itens.push(item)
    localStorage.setItem('mochila', JSON.stringify(itens))

}


function atualizaLista(itens) {
    itens.forEach(elemento => {
        criaItem(elemento)        
    })
}

limparLista.onclick = function() {
    localStorage.clear()
    location.reload()
}