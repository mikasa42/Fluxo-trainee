class Cliente{
    constructor(idCliente,nomeCliente,petCliente,fidelidadeCliente){

        this.id=idCliente;
        this.nome=nomeCliente;
        this.pet=petCliente;
        this.fidelidade=fidelidadeCliente;
    }

}
let n1 = new Cliente(1,'Mikaela','July','Sim');

console.log(`Id: ${n1.id} - Nome: ${n1.nome} - Pet: ${n1.pet} - Fidelidade: ${n1.fidelidade}`);