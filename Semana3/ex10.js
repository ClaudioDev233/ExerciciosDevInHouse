let numeroDeInputs ='';
function AdicionaEndereco(){
    var elementao = document.getElementById("form")
    var elementoQueSeraCoisado = document.getElementById("divTeste")
    var elementoQueSeraCriado = document.createElement("label");
    elementoQueSeraCriado.innerHTML = `
    <label for="">Endereço</label>
         <br>
            <input type="text">
             <br>`
    elementao.insertBefore(elementoQueSeraCriado, elementoQueSeraCoisado) 
    numeroDeInputs++        
    console.log(numeroDeInputs)
}

function Salvar(){
    EnviaProLocalStorage('numero',numeroDeInputs)
}

function Carrega(){
    const valor = RecebeDoLocalStorage('numero')
    const $criado = document.getElementById("criados")
    $criado.innerText = valor

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