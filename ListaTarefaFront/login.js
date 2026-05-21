const myForm = document.getElementById('login');

myForm.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7150/usuario/login', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials:'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome:'aleatorio',
            email: document.getElementById("emailLogin").value,
            senha: document.getElementById("senhaLogin").value
        }),
    }).then(data => {
            window.location.href = "index.html";
        })
});