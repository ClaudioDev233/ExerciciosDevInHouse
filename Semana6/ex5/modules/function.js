import {
    $span,
    nota1,
    nota2,
    nota3} from "./selectors.js"

function pegaNota(){
const notas1 = (nota1).value
const notas2 = (nota2).value
const notas3 = (nota3).value
 const medias = media(notas1,notas2,notas3).toFixed(2)
 $span.innerText = medias
}

var media =(nota1,nota2,nota3)=>{
     return ((+nota1 + +nota2 + +nota3)/3)
 }

 export default pegaNota