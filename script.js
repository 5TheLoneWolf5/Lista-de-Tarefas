const inserir = () => {

  const novaTarefa = document.getElementById("novaTarefa");
  const listaTarefas = document.getElementById("listaTarefas");

  if (novaTarefa.value != "") {

     listaTarefas.innerHTML += novaTarefa.value + "<br>";
     novaTarefa.value = "";
     novaTarefa.focus();

  } else {

    return;

  }
};

const pesquisar = function() {

  const listaTarefas = document.getElementById("listaTarefas");
  const html = listaTarefas.innerHTML;
  const tarefas = html.split("<br>"); // Array de strings.
  // console.log(tarefas);

  const textoTarefa = document.getElementById("textoTarefa");
  const texto = textoTarefa.value;
  let resultadoPesquisa = tarefas.filter(item => item.indexOf(texto) >= 0);
  let dividir = resultadoPesquisa.join(", ");
  
  alert(dividir);

};

const alterar = () => {
  
  const textoTarefa = document.getElementById("textoTarefa");
  const novaTarefa = document.getElementById("novaTarefa");
  let listaTarefas = document.getElementById("listaTarefas");

  let dividir = listaTarefas.innerHTML.split("<br>");
  let acharItem = dividir.find(item => item == textoTarefa.value);
    
  if (acharItem) {

    novaTarefa.value = acharItem;
    textoTarefa.value = "";

    let removeIndex = dividir.indexOf(acharItem);
    dividir.splice(removeIndex, 1);

    listaTarefas.innerHTML = "";
    let filtrarBrancos = dividir.filter(n => n);
    filtrarBrancos.forEach(item => listaTarefas.innerHTML += item + "<br>");

    
    
  } else {
    return;
  }
  
}

const excluir = () => {

  let textoTarefa = document.getElementById("textoTarefa");
  let listaTarefas = document.getElementById("listaTarefas");

  let tarefaSeparada = listaTarefas.innerHTML.split("<br>");

  if (tarefaSeparada.find(item => item == textoTarefa.value)) {

    listaTarefas.innerHTML = "";

    let filtro = tarefaSeparada.filter(element => element !== textoTarefa.value);
    console.log(filtro);
    let filtrarBrancos = filtro.filter(n => n);
    console.log(filtrarBrancos);

    for (i = 0; i < filtrarBrancos.length; i++) {

      listaTarefas.innerHTML += filtrarBrancos[i] + "<br>";

    }

    textoTarefa.value = "";

  } else {

    return;

  }

};