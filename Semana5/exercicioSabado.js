class Usuario {
    #name
    #email
    #senha
    #admin
    constructor(nome, email, senha){
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#admin = false;
    }
    isAdmin(){
        if(this.#admin == false){
            console.log("Você não é um administrador")
        }else{
            console.log('Você tem acesso como administrador')
        }
    }
    get admin(){
        return this.#admin
    }
    set admin(value){
        if(this instanceof Admin){

        }
    }
}
class Admin extends Usuario{
    constructor(nome,email,senha){
        super(nome,email,senha)
        this.admin = true;
    }
}
const aluno = new Usuario ('Claudio', 'claudio.blabla@uepa', '2234543');
const admin = new Admin ('Junior', "jujuba10@hakdsja", '87364782')
