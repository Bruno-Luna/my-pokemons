function loadpk() {
    var url = 'http://pokeapi.co/api/v2/pokemon/25';

    fetch(url)
        .then((response) => {
            // esperamos receber em formato json
            return response.json();
        })
        .then((data) => {
            // o que faremos com os dados informados no json
            console.clear;
            console.log(data);
            document.getElementById('nome').innerHTML = data['name'];
            document.getElementById('numero').innerHTML = data['id'];
            let img = data['sprites']['front_default'];
            document.getElementById('pic').setAttribute('src', img);
        })
        .catch((erro) => {
            console.log("erro: " + erro);
        })
}

document.getElementById('btn1').onclick = loadpk;