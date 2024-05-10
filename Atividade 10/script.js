async function buscarClima(cidade) {
    const apiKey = 'f168096d956e7e297933951ecfa16e5d'; // Sua chave de API do OpenWeatherMap
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

function exibirClima(clima) {
    const climaDiv = document.getElementById("clima");
    climaDiv.innerHTML = `
        <h2>Clima em ${clima.name}</h2>
        <p>Temperatura: ${clima.main.temp}°C</p>
        <p>Descrição: ${clima.weather[0].description}</p>
    `;
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = conteudo.logradouro;
        document.getElementById('bairro').value = conteudo.bairro;
        document.getElementById('cidade').value = conteudo.localidade;
        document.getElementById('uf').value = conteudo.uf;

        buscarClima(conteudo.localidade)
            .then(clima => {
                exibirClima(clima);
            })
            .catch(error => {
                console.error('Erro ao buscar clima:', error);
            });
    } else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function limpa_formulário_cep() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
}
