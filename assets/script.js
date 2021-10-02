function loadpk() {
    var pokeInput = document.querySelector('#pokeInput');

    var nameOrId = pokeInput.value;
    var url = 'http://pokeapi.co/api/v2/pokemon/' + nameOrId.toLowerCase();

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('nome').innerHTML = data['name'].toLowerCase();
            document.getElementById('numero').innerHTML = '#' + data['id'];
            document.getElementById('numero').setAttribute('class', 'estilo_numero')
            //let img = data['sprites']['other']['dream_world']['front_default'];
            let img = data['sprites']['front_default'];
            let imgStyle = "width: 180px; height: 180px";
            document.getElementById('pic').setAttribute('style', imgStyle);
            document.getElementById('pic').setAttribute('src', img);
        })
        .catch((erro) => {
            console.log("erro: " + erro);
        })

}

function changeCardColor() {
    var pokeInput = document.querySelector('#pokeInput');

    var nameOrId = pokeInput.value;
    var url = 'http://pokeapi.co/api/v2/pokemon/' + nameOrId.toLowerCase();

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let backgroundType = "card "; 
            let type = data['types']['0']['type']['name']; 
            backgroundType += type; 
            document.getElementById('card').setAttribute('class', backgroundType);
          

        })
        .catch((erro) => {
            console.log("erro: " + erro);
        })
};

function todasFuncoes() {
    loadpk();
    changeCardColor();
}

function limpar() {
    document.getElementById('card').setAttribute('class', 'card')

    document.getElementById('nome').setAttribute('class', 'nome_default shadow m-auto-texto-card')
    document.getElementById('nome').innerHTML = 'Escolha o seu'

    let imgDefault = 'assets/img/project/pokeball.png'
    document.getElementById('pic').setAttribute('src', imgDefault);
    document.getElementById('pic').setAttribute('style', 'list-style: none;')

    document.getElementById('numero').innerHTML = 'Pokémon'
    document.getElementById('numero').setAttribute('class', 'numero_default shadow')

    document.getElementById('pokeInput').value =''

}

document.getElementById('btn1').onclick = todasFuncoes
document.getElementById('btnLimpar').onclick = limpar

