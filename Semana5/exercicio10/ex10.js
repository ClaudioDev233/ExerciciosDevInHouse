import Produto from "./modules/class.js"
import criarProduto2 from "./modules/function.js";

const produto1 = new Produto ('Air Fryer', 'https://images-americanas.b2w.io/produtos/01/00/img/1520737/1/1520737145_1SZ.jpg', '372.47', 3);

const produto2 = new Produto('Smart TV 50"', 'https://images-americanas.b2w.io/produtos/01/00/img/3069506/1/3069506190_1SZ.jpg', '2974.15',5)

window.addEventListener('onload', Carrega())
function Carrega(){
    criarProduto2(produto1)
    criarProduto2(produto2)
}




