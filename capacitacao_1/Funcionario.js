export class Funcionario{
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

}