 const btnAdicionar = document.getElementById('adicionar')
 const valorTarefa = document.getElementById('texto-input')

btnAdicionar.addEventListener('click', (evento)=>{
    evento.preventDefault();

    if (valorTarefa.value == ''){
        alert('Digite uma terafa')
    } else {
        const tarefa = criarTarefa(valorTarefa.value)
        renderizarTarefa(tarefa)
    }

    valorTarefa.value = ''

    

})
const listaTarefas = document.querySelector('ul')

    listaTarefas.addEventListener('click',(elemento) =>{

        const itemClicado = elemento.target

        console.log(itemClicado.classList.contains('excluir'))

        if (itemClicado.classList.contains('excluir')){
            itemClicado.parentElement.parentElement.remove()
        }
        if (itemClicado.classList.contains('concluir')){
            itemClicado.parentElement.parentElement.firstChild.classList.toggle('concluido')
        }
    })
function criarTarefa (valorarefa){
    //const listaTarefas = document.querySelector('ul')

    const li = document.createElement('li')


    li.innerHTML = `<p>
    ${valorarefa}</p>
    <div>
    <button class="excluir"></button>
    <button class="concluir"></button>
    </div>`

  return li
}

 function renderizarTarefa(tarefa){
    const listaTarefas = document.querySelector('ul')

    listaTarefas.appendChild(tarefa)
 }
 

 