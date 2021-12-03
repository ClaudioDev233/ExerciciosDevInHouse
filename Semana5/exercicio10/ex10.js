import criarProduto2 from "./modules/function.js";
import array from "./modules/produtos.js"

window.addEventListener('onload', Carrega())
function Carrega(){
    for(let produtos of array){
    criarProduto2(produtos)
}
}




