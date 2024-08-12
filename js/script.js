let contador = 0
let input = document.getElementById('inputTarefa')
let buttonAdd = document.getElementById('button-add')
let main = document.getElementById('areaLista')

function adicionarTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value

  //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
  if ((valorInput !== '') || (valorInput !== null)(valorInput !== undefined)) {

    contador++

    let novoItem = `<div id="${contador}" class="item">
      <div onclick="marcarTarefa(${contador})" class="itemIcone">
        <span id="icone_${contador}" class="mdi mdi-circle-outline"></span>
      </div>
      <div onclick="marcarTarefa(${contador})" class="itemNome">
      ${valorInput}
      </div>
      <div class="itemBotao">
        <button onclick="deletar(${contador})" class="delete"><span class="mdi mdi-delete"></span> Deletar</button>
      </div>`

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem

    //ZERAR O INPUT 
    input.value = ''

    input.focus()
  }
}

function deletar(contador) {
  var tarefa = document.getElementById(contador)
  tarefa.remove()
}

function marcarTarefa(id) {
  var item = document.getElementById(id)
  var classe = item.getAttribute('class')
  console.log(classe);

  if (classe == 'item') {
    item.classList.add('clicado')

    var icone = document.getElementById('icone_' + id)
    icone.classList.remove('mdi-circle-outline')
    icone.classList.add('mdi-check-circle')

    item.parentNode.appendChild(item)

  } else {

    item.classList.remove('clicado')

    var icone = document.getElementById('icone_' + id)
    icone.classList.add('mdi-circle-outline')
    icone.classList.remove('mdi-check-circle')

  }
}


input.addEventListener('keyup', function (event) {
  //SE TECLOU ENTER(13)
  if (event.keyCode == 13) {
    event.preventDefault()
    buttonAdd.click()
  }
})
