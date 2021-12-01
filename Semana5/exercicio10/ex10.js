class Produto {
    constructor(nome,imagem, valor,parcelaMax){
        this.nome = nome,
        this.imagem = imagem;
        this.valor = valor;
        this.parcelaMax = parcelaMax;
        
    }
}

const produto1 = new Produto ('Air Fryer', 'https://images-americanas.b2w.io/produtos/01/00/img/1520737/1/1520737145_1SZ.jpg', '372.47', 3);

const produto2 = new Produto('Smart TV 50"', 'https://images-americanas.b2w.io/produtos/01/00/img/3069506/1/3069506190_1SZ.jpg', '2974.15',5)

function Carrega(){
    criarProduto2(produto1)
    criarProduto2(produto2)
}

function criarProduto(produto){
    const $div = document.getElementById('main-container')
    const $divProdutos = document.createElement('div')
     $divProdutos.innerHTML = `<h1>${produto.nome}</h1>
    <img src="${produto.imagem}" style="width=200px;height:200px">
    <p>R$: <span>${produto.valor}
    <label for="formas"> Formas de Pagamento:</label>
    <select name="formas">
    <option> A vista por: R$ ${produto.valor}</option>
    <option> Ou em até ${produto.parcelaMax}x de R$ ${((parseFloat(produto.valor))/produto.parcelaMax).toFixed(2)}</option>
    
    </select>
    `   
    $div.appendChild($divProdutos)
}

function criarProduto2(produto){
    const $div = document.getElementById('main-container')
    const $divProdutos = document.createElement('div')
    $divProdutos.innerHTML = `<h1>${produto.nome}</h1>`

    const $imagem = document.createElement('img')
    $imagem.setAttribute("style","width=200px;height:200px")
    $imagem.src = produto.imagem

    const $preco = document.createElement('p')
    $preco.innerHTML= `R$ <span>${produto.valor}`;

    const $label = document.createElement('label')
    $label.setAttribute("for", "formas")
    $label.innerText = "Formas De Pagamento"
    
    const $select = document.createElement('select');
    $select.setAttribute('name', 'formas')
    
    
    for (let index = 0; index < produto.parcelaMax; index++) {
        let option;
        if(index == 0){
          option = `<option>A vista por: R$ ${produto.valor}</option>`
           $select.innerHTML += option
        } else {
            option = `<option> Ou em até ${index+1}x de R$ ${((parseFloat(produto.valor))/(index+1)).toFixed(2)}</option>`
            $select.innerHTML += option
        }
       
    }
    
    
    
    $div.appendChild($divProdutos)
    $divProdutos.appendChild($imagem)
    $divProdutos.appendChild($preco)
    $divProdutos.appendChild($label)
    $label.after($select)
    
}



