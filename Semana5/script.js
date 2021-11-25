
var listaEndereco = []
var listaEndereco = RecebeDoLocalStorage('Endereços');

function Carrega(){
    for (let index = 0; index < listaEndereco.length; index++) {
        CriaLinha(listaEndereco[index]);  
    }
}

class Endereco {
    

    constructor(logradouro, numero, cep, cidade, estado, pais, status){
        this.logradouro = logradouro;
        this.numero = numero;
        this.cep = cep;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.status = status;
    }
    
}


function gravaEndereco(){
    let listaEnderecos = RecebeDoLocalStorage("Endereços");
    console.log(listaEnderecos)
    const logradouro = getElement('logradouro').value;
    const numero = getElement('numero').value;
    const cep = getElement('cep').value;
    const cidade = getElement('cidade').value;
    const estado = getElement('estado').value;
    const pais = getElement('pais').value;
    const status = ChecaValor()
    let endereco = new Endereco(logradouro, numero,cep, cidade, estado, pais, status);

    listaEnderecos.push(endereco)
   
    EnviaProLocalStorage('Endereços', listaEnderecos)
    CriaLinha(endereco)
    console.log(listaEnderecos)
}

function ValorSelecionado(){
    const valorSelecionado = getElement('enderecos').value;
    return valorSelecionado
}
function CriaLinha(endereco){
    const div = getElement('div')
    const tabela = document.createElement('table')
    console.log(endereco.status);
    if(endereco.status == 'Cliente'){
        tabela.innerHTML =
     ` <tr>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Cep</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Pais</th>
        </tr>
        <tr>
            <td>${endereco.logradouro}</td>
            <td>${endereco.numero}</td>
            <td>${endereco.cep}</td>
            <td>${endereco.cidade}</td>
            <td>${endereco.estado}</td>
            <td>${endereco.pais}</td>
            <td>Cliente</td>
        </tr>
    `
    } else if (endereco.status == 'Loja'){
    tabela.innerHTML =
     ` <tr>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Cep</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Pais</th>
        </tr>
        <tr>
            <td>${endereco.logradouro}</td>
            <td>${endereco.numero}</td>
            <td>${endereco.cep}</td>
            <td>${endereco.cidade}</td>
            <td>${endereco.estado}</td>
            <td>${endereco.pais}</td>
            <td>Loja</td>
        </tr>
    `
    }else{
        tabela.innerHTML =
     ` <tr>
            <th>Logradouro</th>
            <th>Numero</th>
            <th>Cep</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Pais</th>
        </tr>
        <tr>
            <td>${endereco.logradouro}</td>
            <td>${endereco.numero}</td>
            <td>${endereco.cep}</td>
            <td>${endereco.cidade}</td>
            <td>${endereco.estado}</td>
            <td>${endereco.pais}</td>
            <td>Mercado</td>
        </tr>
    `
    }
    div.appendChild(tabela)
}
function ChecaValor(){
    let status = 0;
    const valorASerChecado = ValorSelecionado();
    if(valorASerChecado == 'Cliente'){
        status = 'Cliente'
    }else if(valorASerChecado == 'Loja'){
        status = 'Loja'
    }else{
        status = 'Mercado'
    }
    return status
}

function EnviaProLocalStorage(key,obj){
 localStorage.setItem(key, JSON.stringify(obj))
}

function RecebeDoLocalStorage(key){
    var recebeLocalStorage = localStorage.getItem(key)
    var transformarEmObj = JSON.parse(recebeLocalStorage)
    transformarEmObj = transformarEmObj == null? [] : transformarEmObj
    return transformarEmObj
}

function criaInput(texto, callback){
  const $form = document.querySelector('form');
  const $input = document.createElement("input");
  $input.setAttribute("type", "text"); 
  $input.placeholder = texto;
 
  callback($input)
  $form.appendChild($input)
  return $input
}

criaInput('logradouro', (input) =>{
    input.id = 'logradouro';
});
criaInput('numero', (input) =>{
    input.id = 'numero';
});
criaInput('cep', (input) =>{
    input.id = 'cep';
});
criaInput('cidade', (input) =>{
    input.id = 'cidade';
});
criaInput('estado', (input) =>{
    input.id = 'estado';
});
criaInput('Pais', (input) =>{
    input.id = 'pais';
});
criaInput('Botao', (input) =>{
    input.setAttribute('type','button')
    input.setAttribute('value','botao')
    input.setAttribute('onClick','gravaEndereco()')
});

const getElement = seletor =>{
    const element = document.getElementById(seletor);
    return element
}

