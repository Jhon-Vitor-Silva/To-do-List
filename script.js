 const btnAdicionar = document.getElementById('adicionar')
 const valorTarefa = document.getElementById('texto-input')

btnAdicionar.addEventListener('click', (evento)=>{
    evento.preventDefault();

     const tarefa =  criarTarefa(valorTarefa.value)

 valorTarefa.value = ''

renderizarTarefa(tarefa)
})

function criarTarefa (valorarefa){
    //const listaTarefas = document.querySelector('ul')

    const li = document.createElement('li')

    li.innerHTML = `
    ${valorarefa}
    <div>
    <button class=".excluir"><img src="./imagens/icons8-excluir-48.png" alt="botao excluir"></button>
    <button class="concluir"><img src="./imagens/icons8-tarefa-concluída-48.png" alt=""></button>
</div>`

  return li
}

 function renderizarTarefa(tarefa){
    const listaTarefas = document.querySelector('ul')

    listaTarefas.appendChild(tarefa)
 }
 

 