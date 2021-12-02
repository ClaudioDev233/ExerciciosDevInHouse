const nomeCompleto = ((nome,sobrenome) =>{ 
     if(nome == undefined || nome ==''){
        nome = "Jane";
        
    } 
    if(sobrenome == undefined){
        sobrenome ="Doe"
    }
    if (nome == undefined && sobrenome == undefined){
        nome = 'Jane';
        sobrenome='Doe';
    }
    
    return `Olá meu nome é:${nome} ${sobrenome}`
});
console.log(nomeCompleto('','Junior'))

