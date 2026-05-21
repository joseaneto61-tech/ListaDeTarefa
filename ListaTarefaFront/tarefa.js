const myForm = document.getElementById('cadastrarTarefa');

myForm.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7150/tarefa/criar', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials:'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            descricao: document.getElementById("descricao").value,
            statuss: "Pendente"
           
        }),
    }).then(response => {
        if (response.status == 401) {
            document.getElementById("respostaReserva").innerHTML = "<h4>Realize login antes de reservar!</h4>";
        }
        response.text();
    })
        .then(data => {

            document.getElementById("respostaReserva").innerHTML = "<h4>Reserva cadastrada com sucesso!</h4>";
            window.location.href = "index.html";
        })
});