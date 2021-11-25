Quais são as diferenças entre var, let e const?

Antes de falar sobre a diferença entre as três maneiras de declaras uma variável, precisamos saber o que é Escopo.

Escopo nada mais é o lugar onde aquela variável está disponível. Podendo ser:
Escopo Global: onde a variável está disponível para toda a aplicação;
Escopo da Função: disponível apenas na função onde foi declarada;
Escopo do Bloco: disponível apenas entre o bloco '{}' que foi declarado.

var: Declarando uma variável com 'var', faz com que o valor a ela atribuído possa ser modificado fora do escopo declarado, isso não gera problemas em codigos pequenos, porém pode arruinar códigos grandes.

let: o 'let' surgiu para resolver o problema do var, fazendo com que seu valor seja alterado apenas no escopo que foi definido.

const: uma variável declarada com 'const' torna-se "imutavel", ou seja, seu valor não pode ser alterado, resultando em erro no console.

O que são Classes, Atributos e Métodos?

Classes: É um template que permite a criação de diversos objetos semelhantes. Costumam ser genéricas e as classes herdadas (ou subclasses como gosto de chamar) costumam atribuir mais especificidades a ela. Toda classe tem um constructor, que atribui as 'caracteristicas' dessa classe.

Atributos: São variáveis atribuidas a uma classe pela método constructor, as quais recebem as caracteristicas dessa classe.

Métodos: São funções que interagem com a classe, podendo ser estáticos ou não. Métodos 'comuns" alteram os valores das variáveis criadas pelo constructor, ou seja, alteram suas características. Já metodos estáticos conseguem alterar a classe como um todo.