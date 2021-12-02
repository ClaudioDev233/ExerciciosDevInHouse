import {
    nota1,
    nota2,
    nota3} from "./selectors.js"

function pegaNota(){
const notas1 = (nota1)
const notas2 = (nota2)
const notas3 = (nota3)
 const medias = media(notas1,notas2,notas3)
 console.log(typeof medias)
 console.log(medias)
}

function media(nota1,nota2,nota3){
     return parseInt(nota1 + nota2 + nota3)
 }

 export default pegaNota