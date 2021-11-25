import { 
    nome,
    image,
    description,
    userNome,
    userImage,
    userDescription,
    $button
 } from "./selectors.js";

const alteraCard = ()=> {
    if(nome.value && image.value && description.value){
        userNome.innerText = nome.value;
        userImage.src = image.value
        userDescription.innerText = description.value
    }
} 

export default alteraCard