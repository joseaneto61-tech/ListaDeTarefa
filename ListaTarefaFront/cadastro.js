const myForm = document.getElementById('cadastroUsuario');

myForm.addEventListener('submit', function (event) {
    // 1. Prevenir o recarregamento da página ao submeter form
    event.preventDefault();

    fetch('https://localhost:7150/usuario/cadastrar', {
        method: 'POST', //Para outros métodos, basta alterar aqui. Obs: Delete remove a parte do body e headers, e no get é conforme todos os exemploes feitos na Unidade interação com API 
        credentials:'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: document.getElementById("nomeCadastro").value,
            email: document.getElementById("emailCadastro").value,
            senha: document.getElementById("senhaCadastro").value
        }),
    }).then(response => response.json())
        .then(data => {
            console.log("Sucesso:", data);
            alert("Conta criada com sucesso!");     
        })
});