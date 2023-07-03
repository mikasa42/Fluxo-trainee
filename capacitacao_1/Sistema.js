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
    #senha;
    constructor(idFuncionario,nomeFuncionario,senhaFuncionario){

        this.id=idFuncionario;
        this.nome=nomeFuncionario;
        this.#senha=senhaFuncionario;
    }
    //encapsulamento
    get senhaF(){
        return this.#senha;
    }
    set senhaF(senhaS){

        this.#senha = senhaS;
    }
    login(nomeF,senhaFun){
        if(nomeF == this.nome && senhaFun == this.#senha)
            return 1;
        else
            return 0;
    }

}

"use strict";

let n1 = new Cliente(1,'Mikaela','July','Sim');
let n2 = new Funcionario(1,'Mirella',1234);

console.log(`Id: ${n1.id} - Nome: ${n1.nome} - Pet: ${n1.pet} - Fidelidade: ${n1.fidelidade}`);
console.log(n2.senhaF);

const prompt = require("prompt-sync")({sigint:true});
let x = parseInt(prompt('Digite um valor qualquer:'));
console.log(`x = ${x}`);
let i = 0;
while(i!=2){
    console.log("\n\n")
    console.log('******************************\n');
    console.log('****** 0 - Login       ********\n');
    console.log('****** 1 - Cadastro    ********\n');
    console.log('****** 2 - Sair         *******\n');
    i = parseInt(prompt('Digite a sua opcao:'));
    if(i==0){
        let nomeF = parseInt(prompt('Digite o seu nome:'));
        let senhaFun = parseInt(prompt('Digite a sua senha:'));
        let verificacao = n2.login(nomeF,senhaFun);
        if(verificacao == 1){
            console.log("Bem-vindo");
        }
        else{
            console.log(verificacao);
        }

    }


}