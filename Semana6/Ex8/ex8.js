const $imgPreview = document.querySelector('.image-preview')
const $dropZone = document.querySelector('.drop-zone')
const $input = document.querySelector('.input')
const $js = document.querySelector('.js')
const $html = document.querySelector('.html')
const $css = document.querySelector('.css')
const $react = document.querySelector('.react')



const $userLanguages = document.querySelector('.user-languages')

$dropZone.addEventListener("click", e =>{
    $input.click()
});

const dropHandler =(event) =>{
event.preventDefault()
 console.log('dropado');
 const itemDropado = event.dataTransfer;
 const fileItemDropado = itemDropado.files[0]
 PreviewImage(fileItemDropado)
 $dropZone.classList.remove('drop-zone-dropped')
 
};

const dragOver =(event)=>{
    event.preventDefault()
    $dropZone.classList.add('drop-zone-dropped')
    console.log('dropou')
}

const dragEnd=() =>{
    $dropZone.classList.remove('drop-zone-dropped')
}

const dragLeave = () =>{
    $dropZone.classList.remove('drop-zone-dropped')
}
const PreviewImage =(files) =>{
    const file = files;
    console.log(file)
    if(files.type.startsWith("image/")){

        const reader = new FileReader;

    reader.onload = () =>{
        $imgPreview.style.backgroundImage = `url('${reader.result}')`
    };
    reader.readAsDataURL(file)
    } else {
        alert("insira uma imagem")
    }
    $imgPreview.classList.remove('aqui')
    $imgPreview.classList.add('tes')
}


function HtmlCheck(){
    const inputstat = $html.checked
    if(inputstat){
        $userLanguages.innerHTML= `<img src="https://img.icons8.com/ios/50/000000/html-5--v2.png"/>`
    }
}

function CssCheck(){
    const inputstat = $css.checked
    if(inputstat){
        $userLanguages.innerHTML = ` <img src="https://img.icons8.com/ios/50/000000/css3.png"/>`
    }
}

function ReactCheck(){
    const inputstat = $react.checked
    if(inputstat){
        const imgLanguage = document.createElement('img')
        imgLanguage.src = "https://img.icons8.com/ios-filled/50/000000/react-native.png"
        $userLanguages.appendChild(imgLanguage)
        console.log("chegou")
    }
}
function criaDiv(linguagem){
   const div = document.createElement('div');
   div.setAttribute("id" , linguagem) 
   const fotoLinguagem = document.createElement('img')
   switch (linguagem) {
       case 'Js':
           fotoLinguagem.src = "https://img.icons8.com/ios/50/000000/javascript--v2.png"
           break;
   
       default:
           break;
   }
   div.appendChild(fotoLinguagem)
   console.log(div)
   return div
}



/*  const elementoJs = document.createElement('div')
elementoJs.setAttribute('id', 'js')
const fotoJs = document.createElement('img')
fotoJs.src = "https://img.icons8.com/ios/50/000000/javascript--v2.png"
elementoJs.appendChild(fotoJs)  */


function JsCheck(){
    const fodase = criaDiv('Js')
    console.log(fodase)
    const inputstat = $js.checked
    if(inputstat == true){
        $userLanguages.appendChild(fodase)
    } else {
        $userLanguages.removeChild(fodase)
    }
}






/* function JsCheck(){
    
    const inputstat = $js.checked
    const imgLanguage = document.createElement('img')
    console.log($userLanguages)
    console.log(imgLanguage)
    if(inputstat == true){
        imgLanguage.src = "https://img.icons8.com/ios/50/000000/javascript--v2.png"
        $userLanguages.appendChild(imgLanguage)  
    } else{
        $userLanguages.removeChild(imgLanguage)
    }
    
} */

