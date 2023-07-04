class Cliente{
    constructor(idCliente,nomeCliente,fidelidadeCliente){//O pet pode ser um cachorro, passarinho e etc então determinei um tipo.

        this.id=idCliente;
        this.nome=nomeCliente;
        //this.pet=petCliente;
        this.fidelidade=fidelidadeCliente;
    }

}

class Animal extends Cliente{
    constructor(idCliente,nomeCliente,fidelidadeCliente,tipoPetCliente,idPet,nomePet,consultasPet){
        super(idCliente,nomeCliente,fidelidadeCliente);
        this.tipo = tipoPetCliente;
        this.idP=idPet;
        this.nome=nomePet;
        this.nomeDono = nomeCliente;
        this.consulta=consultasPet;//numero de consultas 
    }
}
class Funcionario{
    //#senha;
    constructor(idFuncionario,nomeFuncionario,senhaFuncionario){

        this.id=idFuncionario;
        this.nome=nomeFuncionario;
        this.senha=senhaFuncionario;
    }
    //encapsulamento
   /* get senhaF(){
        return this.#senha;
    }
    set senhaF(senhaS){

        this.#senha = senhaS;
    }*/
    login(nomeF,senhaFun){
        if(nomeF == this.nome && senhaFun == this.senha)
        {
            return 1;
        }
        else
        {
            return 0;
        }
         
    }
    cadastro(num){
        // Adicionando + 1 a variavel de controle funcionario.
        return num+1;

    }
    visualizarDados(){
        let dados = [this.id, this.nome,this.senha];
        return dados;
    }
    alterarDados(nomeF,senhaF){
        this.nome = nomeF;
        this.senha = senhaF;

    }

}
class Consulta extends multi.inherit(Animal,Funcionario){//herança multipla. 
    constructor(idCliente,nomeCliente,nomePet,nomeFuncionario,statusConsulta,dataConsulta,consultasPet,idFuncionario,senhaFuncionario){
        super(idCliente,nomeCliente,fidelidadeCliente,tipoPetCliente,idPet,nomePet,consultasPet,idFuncionario,nomeFuncionario,senhaFuncionario);
        this.id=idCliente;
        this.nome=nomeCliente;
        this.nomepet=nomePet;
        this.nomefuncionario=nomeFuncionario;
        this.statusconsulta=statusConsulta;
        this.dataconsulta=dataConsulta;
    }
    marcarConsulta(id,nomeC,nomeP,nomeF,status,dataC){
        this.id = id;
        this.nome=nomeC;
        this.nomepet=nomeP;
        this.nomefuncionario=nomeF;
        this.statusconsulta=status;
        this.dataconsulta=dataC;


    }
}


"use strict";
let n = [];
let funcionarios = 0;
let c = [];
let a = [];
let consulta = [];
//idCliente,nomeCliente,fidelidadeCliente
c[0] = new Cliente(0,'Ana','Thor','Nao');
c[1] = new Cliente(1,'Mikaela','July','Sim');
c[2] = new Cliente(2,'Beatriz','Gaia','Nao');
c[3] = new Cliente(3,'Lorenna','Simba','Sim');
c[4] = new Cliente(4,'Karen','Bruce','Nao');
//idCliente,nomeCliente,fidelidadeCliente,tipoPetCliente,idPet,nomePet,consultasPet
a[0] = new Animal(0,'Ana','Nao','Cachorro',0,'Thor',0);
a[1] = new Animal(4,'Karen','Nao','Papagaio',1,'July',5);
a[2] = new Animal(2,'Beatriz','Nao','Papagaio',2,'Gaia',3);
a[3] = new Animal(1,'Mikaela','Sim','Cachorro',3,'Simba',4);
a[4] = new Animal(3,'Lorenna','Sim','Gato',4,'Bruce',7);


//console.log(`Id: ${n1.id} - Nome: ${n1.nome} - Pet: ${n1.pet} - Fidelidade: ${n1.fidelidade}`);
//console.log(n2.senha);

const prompt = require("prompt-sync")({sigint:true});
//Variaveis de controle.
let i = 0;//Menu do sistema.
let u = 0;// Sessão do usuario.
let m = 0;//
let posicao = 0;
let verificacao =0;
while(i!=2){
    console.log("\n\n")
    console.log('*******************************\n');
    console.log('****** 0 - Login       ********\n');
    console.log('****** 1 - Cadastro    ********\n');
    console.log('****** 2 - Sair        ********\n');
    console.log('*******************************\n');
    i = parseInt(prompt('Digite a sua opcao:'));
    if(i==0){
        let nomeF = prompt('Digite o seu nome:');
        let senhaFun = parseInt(prompt('Digite a sua senha:'));
        for (m=0; m<n.length; m++){
            let verificacao = n[m].login(nomeF,senhaFun);
            if(verificacao == 1){
                console.log(`Bem vindo(a) ${n[m].nome}`);
                while(u!=13){
                    console.log('****************************************\n');
                    console.log('****** 1  - Meus dados          ********\n');
                    console.log('****** 2  - Alterar meus dados  ********\n');
                    console.log('****** 3  - Listar clientes     ********\n');
                    console.log('****** 4  - Listar pets         ********\n');
                    console.log('****** 5  - Listar consultas    ********\n');
                    console.log('****** 6  - Listar funcionarios ********\n'); // id e nome, ocultar senha.
                    console.log('****** 7  - Marcar consulta     ********\n');
                    console.log('****** 8  - Mudar status        ********\n');
                    console.log('****** 9  - Remover Cliente     ********\n');
                    console.log('****** 10 - Remover Pet         ********\n');
                    console.log('****** 11 - Cancelar consulta   ********\n');
                    console.log('****** 12 - Remover funcionario ********\n');
                    console.log('****** 13 - Logout              ********\n');
                    console.log('****************************************\n');
                    u = parseInt(prompt('Digite a sua opcao:'));
                    if(u == 1){
                        let dados = n[m].visualizarDados();
                        console.log(dados); // Consertar print.
    
                    }
                    else if(u == 2){
                        nomeF = prompt('Digite o seu nome:');
                        senhaFun = parseInt(prompt('Digite a sua senha:'));
                        n[m].alterarDados(nomeF,senhaFun);
                        console.log(`seus dados estao assim nome:${n[m].nome}, senha: ${n[m].senha}\n`);
                    }
                    else if(u == 3){//listar clientes
                        for(m=0; m<c.length; m++){//idCliente,nomeCliente,fidelidadeCliente
                            console.log(`id: ${c[m].id}, nome:${c[m].nome},fidelidade:${c[m].fidelidade}\n`);
                        }
                        
                    }
                    else if(u == 4){//Listar pets
                        for(m=0; m<a.length; m++){//idCliente,nomeCliente,fidelidadeCliente,tipoPetCliente,idPet,nomePet,consultasPet
                            console.log(`id: ${a[m].id}, Dono:${a[m].nomeDono}, fidelidade:${a[m].fidelidade}, Tipo:${a[m].tipo}, nomePet:${a[m].nome}\n`);
                        }
                        
                    }
                    else if(u == 5){//Listar consultas 
                        for(m=0; m<n.length; m++){//id,nomeC,nomeP,nomeF,status,dataC
                            console.log(`id: ${consulta[m].id}, Nome Cliente:${consulta[m].nome},Nome Pet:${consulta[m].nomePet},Nome Funcionario:${consulta[m].nomeFuncionario},status:${consulta[m].statusconsulta} ,data:${consulta[m].dataconsulta}\n`);
                        }
                    }
                    else if(u == 6){// Listar funcionarios
                        for(m=0; m<n.length; m++){//idFuncionario,nomeFuncionario,senhaFuncionario
                            console.log(`id: ${n[m].id}, Nome:${n[m].nome}\n`);
                        }
                    }
                    else if(u == 7){//Marcar consulta
                        //idCliente,nomeCliente,nomePet,nomeFuncionario,statusConsulta,dataConsulta
                        let id = parseInt(prompt('Digite o id do cliente:'));
                        let nomeC = parseInt(prompt('Digite o nome do cliente:'));
                        let nomeP = parseInt(prompt('Digite o nome do Pet:'));
                        nomeF = n[m].nome;
                        let status = "marcada";
                        let dataC = parseInt(prompt('Digite a data nesse formato DIA/MES/ANO:'));
                        marcarConsulta(id,nomeC,nomeP,nomeF,status,dataC);
                        console.log(consulta);

                    }
                    else if(u == 8){
                        
                    }
                    else if(u == 9){
                        console.log("Digite o id referente ao cliente que deseja apagar !")
                        for(m=0; m<n.length; m++){//idFuncionario,nomeFuncionario,senhaFuncionario
                            console.log(`id: ${c[m].id}, Nome:${c[m].nome}\n`);
                        }
                        posicao = parseInt(prompt('Digite a sua opcao:'));
                        delete(c[i]);
                        
                    }
                    else if(u == 10){
                        console.log("Digite o id referente ao pet que deseja apagar !")
                        for(m=0; m<n.length; m++){//idFuncionario,nomeFuncionario,senhaFuncionario
                            console.log(`id: ${a[m].id}, Nome:${a[m].nome}\n`);
                        }
                        posicao = parseInt(prompt('Digite a sua opcao:'));
                        delete(a[i]);
                        
                    }
                    else if(u == 11){
                        
                    }
                    else if(u == 12){
                        console.log("Digite o id referente ao funcionario que deseja apagar !")
                        for(m=0; m<n.length; m++){//idFuncionario,nomeFuncionario,senhaFuncionario
                            console.log(`id: ${n[m].id}, Nome:${n[m].nome}\n`);
                        }
                        posicao = parseInt(prompt('Digite a sua opcao:'));
                        delete(n[i]);
                        
                    }
                    else{
                        console.log("Opcao invalida digite mais uma vez");
                        u = parseInt(prompt('Digite a sua opcao:'));
                    }
            
                }
                
            }
            else{
                console.log("Usuario ou senha incorretos...");
            }
        }
       
    }
    else if(i==1){ 
        let nomeF = prompt('Digite o seu nome:');
        let senhaFun = parseInt(prompt('Digite uma senha:'));
        n[funcionarios] = new Funcionario(funcionarios,nomeF,senhaFun);
        let numFuncionarios = n[funcionarios].cadastro(funcionarios);
        funcionarios = numFuncionarios;
       // console.log(n);

    }


}