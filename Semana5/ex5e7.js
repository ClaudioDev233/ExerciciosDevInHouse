class Cliente {
    #endereco
    #cpf
    constructor(nome, cpf, endereco, celular){
        this.nome = nome;
        this.#cpf = cpf;
        this.#endereco = enderecos.push(endereco)
        this.celular = celular;
    }
    get endereco(){
        return this.#endereco
    }
     toJSON() {
        return {
            endereco: this.#endereco,
        }
    }
    get cpf(){
        return this.#cpf
    }
    toJSON(){
        return{
            cpf: this.#cpf
        }
    }
    validaCPF(){
       if((this.#cpf).length <= 11){
         console.log('Validou')
       }else{
           console.log("CPF INV")
       }
    }
}
