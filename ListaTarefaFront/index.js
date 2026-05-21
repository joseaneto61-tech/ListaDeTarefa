 function logout() {
    fetch('https://localhost:7150/tarefa/logout', {
        credentials: 'include'
    }).then(response => window.location.href = "login.html")
}

document.addEventListener("DOMContentLoaded", function () {
   
    fetch('https://localhost:7150/tarefa',{ 
         credentials:"include"
        })

    .then(response =>
        response.json())
        .then(data => {
            console.log(data);
            if(data.length>0){
           var resposta = document.getElementById("listaTarefa");
           resposta.innerHTML ="<h4>Segue Lista de Tarefas</h4> ";      

         for (let i = 0; i < data.length; i++) {

    resposta.innerHTML += "Descrição: <input type='text' id='descricao' value='" + data[i].tarefas +"'>";
    resposta.innerHTML += "Status: <input type='text' id='status' value='" + data[i].statuss +"'>";
    resposta.innerHTML += "<button onclick='editarTarefa(" + data[i].id + ")'> Editar Tarefa</button>"
    resposta.innerHTML += "<button onclick='deletaReserva(" + data[i].id+")'>X</button> <hr>"
         }}
        
        })
});

function editarTarefa (idTarefa){
        fetch('https://localhost:7150/tarefa/atualizar/'+idTarefa, {
        method: 'PUT', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            descricao: document.getElementById("descricao").value,
            statuss: document.getElementById("status").value
        }),
    }).then(response => {
            window.location.href = "index.html";
        })
    }

    function deletaReserva(idTarefa) {
    fetch('https://localhost:7150/tarefa/' + idTarefa, {
        method: 'DELETE',
        credentials: 'include'
    })
}