const express = require("express"); // Importando o express
const app = express(); // Iniciando o Espress

app.get("/",function(req,res){  // app.get => Cria a ROTA. ( primeiro passa o endereço, depois a funcionao de requisicao e resposta)
    res.send("Bem Vindo");  // Envia uma resposta ( Só pode enviar a resposta uma vez)
}); 

app.get("/blog",function(req,res){   //  http://localhost:4000/blog
    res.send("Voce acessou o blog"); 
});

app.get("/teste/teste",function(req,res){  // http://localhost:4000/teste/teste
    res.send("Voce acessou o teste");  
});



// CRIAR O SERVIDOR É SEMPRE A ULTIMA COISA


app.listen(4000,function(erro){ // usando a constante "app", para escutar na porta 4000 e rodar uma função de erro
    if(erro){ // se acontecer algum erro...
        console.log("Ocorreu um erro"); // mostra mensagem de erro
    }else{ // senao..
        console.log("Deu tudo certo"); // mensagem de sucesso
    }

})