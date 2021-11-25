const nome = window.prompt("Qual seu nome?")
const idade = window.prompt("Qual sua idade?")
const esportePredileto = window.prompt("Qual seu esporte preferido?")
const diaDaSemana = window.prompt("Qual seu dia da semana preferido?")
const alguemImportante = window.prompt("Digite o nome de alguém importante para você.")
const alguemAdmiravel = window.prompt("Digite o nome de alguém que você admira.")

const string = `Hoje, ${diaDaSemana}, é um dia histórico. Todos os fãs de
${esportePredileto} estão maravilhados com a proeza realizada pelo(a) atleta ${nome}
${alguemImportante} não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a)
${alguemAdmiravel} twittou “é muito bom ver alguém com ${idade} anos demonstrando tanta habilidade`;

window.alert(string)