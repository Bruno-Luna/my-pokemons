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
            document.getElementById('numero').innerHTML ='#' + data['id'];
            //let img = data['sprites']['other']['dream_world']['front_default'];
            let img = data['sprites']['front_default'];
            let imgStyle =  "width: 180px; height: 180px";
            document.getElementById('pic').setAttribute('style', imgStyle);
            document.getElementById('pic').setAttribute('src', img);
        })
        .catch((erro) => {
            console.log("erro: " + erro);
        })

}

function changeCardColor(){
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
            console.log(backgroundType)

        })
        .catch((erro) => {
            console.log("erro: " + erro);
        })
};

function todasFuncoes(){
    loadpk();
    changeCardColor();
}

document.getElementById('btn1').onclick = todasFuncoes

