let textos = ["animal", "carro", "humano", "prédio","cadeira", "objeto"];

const textosEmOrdem = textos.sort((a,b) => b.length - a.length);

console.log(textosEmOrdem)