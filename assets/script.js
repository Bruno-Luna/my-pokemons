function loadpk() {
    let pokeInput = document.querySelector('#pokeInput');

    var nameOrId = pokeInput.value;
    var url = 'http://pokeapi.co/api/v2/pokemon/' + nameOrId.toLowerCase();

    fetch(url)
        .then((response) => {
           
            return response.json();
        })
        .then((data) => {
            console.clear;
            console.log(data);
            document.getElementById('nome').innerHTML = data['name'].toUpperCase();
            document.getElementById('numero').innerHTML ='#' + data['id'];
            let img = data['sprites']['front_default'];
            let imgStyle =  "width: 180px; height: 180px";
            document.getElementById('pic').setAttribute('style', imgStyle)
            document.getElementById('pic').setAttribute('src', img);
        })
        .catch((erro) => {
            console.log("erro: " + erro);
        })
}

document.getElementById('btn1').onclick = loadpk;