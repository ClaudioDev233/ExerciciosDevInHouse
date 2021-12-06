const $resultado = document.getElementById('resultado')
const $soma = document.getElementById('soma')
const $subtrai = document.getElementById('subtrai')
const $multiplica = document.getElementById('multiplica')
const $divide = document.getElementById('divide')

$soma.addEventListener("click",()=>{ 
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    const resultado = soma(num1,num2);
    $resultado.innerText = resultado;
})   

$subtrai.addEventListener("click",()=>{ 
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    const resultado = subtrai(num1,num2)
    $resultado.innerText = resultado
})

$multiplica.addEventListener("click",()=>{ 
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    const resultado = multiplica(num1,num2)
    $resultado.innerText = resultado
})

$divide.addEventListener("click",()=>{ 
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    const resultado = divide(num1,num2)
    $resultado.innerText = resultado
})

const soma = (num1,num2) =>{
     return num1 + num2
}

const subtrai = (num1,num2) =>{
     return num1 - num2
}

const multiplica = (num1,num2) =>{
     return num1 * num2
}

const divide = (num1,num2) =>{
     if(num2 == 0){
         return 'Você não pode dividir por 0'
     }else{
         return num1 / num2
     }   
}


