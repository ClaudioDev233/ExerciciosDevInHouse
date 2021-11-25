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
}