class Cliente{
    constructor(idCliente,nomeCliente,petCliente,fidelidadeCliente){

        this.id=idCliente;
        this.nome=nomeCliente;
        this.pet=petCliente;
        this.fidelidade=fidelidadeCliente;
    }

}
class Consulta{
    constructor(idCliente,nomeCliente,nomePet,nomeFuncionario,statusConsulta,dataConsulta){

        this.id=idCliente;
        this.nome=nomeCliente;
        this.nomepet=nomePet;
        this.nomefuncionario=nomeFuncionario;
        this.statusconsulta=statusConsulta;
        this.dataconsulta=dataConsulta;
    }
}
class Animal{
    constructor(idPet,nomePet,consultasPet){

        this.id=idPet;
        this.nome=nomePet;
        this.consulta=consultasPet;
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
    alterarDados(){

    }

}

"use strict";
let n = [];
let funcionarios = 0;

let n1 = new Cliente(1,'Mikaela','July','Sim');
let n2 = new Funcionario(1,'Mirella',1234);

console.log(`Id: ${n1.id} - Nome: ${n1.nome} - Pet: ${n1.pet} - Fidelidade: ${n1.fidelidade}`);
console.log(n2.senha);

const prompt = require("prompt-sync")({sigint:true});
//Variaveis de controle.
let i = 0;//Menu do sistema.
let u = 0;// Sessão do usuario.
let m = 0;
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
                    console.log('****** 0  - Meus dados          ********\n');
                    console.log('****** 1  - Alterar meus dados  ********\n');
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
                    if(u == 0){
                        let dados = n2.visualizarDados();
                        console.log(dados); // Consertar print.
    
                    }
                    if(u == 1){
                        
                    }
                    if(u == 2){
                        
                    }
                    if(u == 3){
                        
                    }
                    if(u == 4){
                        
                    }
                    if(u == 5){
                        
                    }
                    if(u == 6){
                        
                    }
                    if(u == 7){
                        
                    }
                    if(u == 8){
                        
                    }
                    if(u == 9){
                        
                    }
                    if(u == 10){
                        
                    }
                    if(u == 11){
                        
                    }
                    if(u == 12){
                        
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
    if(i==1){ 
        let nomeF = prompt('Digite o seu nome:');
        let senhaFun = parseInt(prompt('Digite uma senha:'));
        n[funcionarios] = new Funcionario(funcionarios,nomeF,senhaFun);
        let numFuncionarios = n2.cadastro(funcionarios);
        funcionarios = numFuncionarios;
        console.log(n);

    }


}