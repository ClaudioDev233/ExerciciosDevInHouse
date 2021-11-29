/*faz um for ou um while para o numero de divs
inner html e tal e dps colocar um id e inserir direto pelo ulr do json?*/

const container = document.getElementById("container");
const corpo = document.getElementsByTagName("body")[0];
do {
    var numero = parseInt(window.prompt("Digite um numero de 1 a 10"));
    
} while (numero > 10 || numero < 1);

var section= '';
for (var i = 1; i <= numero; i++){
    fetch("https://dog.ceo/api/breeds/image/random").then( function(data){
        return data.json();
    }).then(function(json){
        var resultado = json.message;
        var section = "<section style=\"background-image:url('"+resultado+"')\">dog</section>";
        corpo.insertAdjacentHTML("beforeend",section)
})
fetch("https://api.thecatapi.com/v1/images/search").then( function(data){
        return data.json();
    }).then(function(json){
        var resultado = json[0].url;
        var section = "<section style=\"background-image:url('"+resultado+"')\">cat</section>";
        corpo.insertAdjacentHTML("beforeend",section)
})
}
