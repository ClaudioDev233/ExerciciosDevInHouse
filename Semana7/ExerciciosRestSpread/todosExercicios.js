const frameworks = ['vuejs', "angularjs", "reactjs"]

const [,,esseframe] = frameworks;

const personagem ={
    nome: 'Sam',
    nascimento: '11xxx',
    familia: {
        esposa: "Rosinha",
        melhorAmigo: 'Frodo'
    }
};

const historiaDoPersonagem= ({nome, familia:{esposa,melhorAmigo}})=>{ 
    return `Meu nome é ${nome} e sou casado com ${esposa}. Gosto de dar um role com meu amigo ${melhorAmigo}`
 }

const frutas = ["morango", "pessego", "banana"]
const legumes = ["cenoura", "batata","abobrinha"]

const alimentos = [...frutas , ...legumes]

const usuario ={
    nome: "Joana",
    sobrenome: "Carvalho",
    interesses: ["leitura", 'jardinagem', 'internet das coisas'],
    familia: {
        pai:'Claudio',
        mae: 'Odete',
        irma:'Lorena'
    }
}

const falaMoca = ({nome, sobrenome, interesses: [interesse], familia: {mae}}) =>{ 
    return `Olá, meu nome é ${nome} ${sobrenome} e meu principal hobbie é ${interesse}. O nome da minha mãe é ${mae}`
}   