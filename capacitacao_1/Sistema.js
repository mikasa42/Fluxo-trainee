import { Cliente } from "./Cliente.js";
import { Consulta } from "./Consulta.js";
import { Animal } from "./Animal.js";
import { Funcionario } from "./Funcionario.js";



let n1 = new Cliente(1,'Mikaela','July','Sim');

console.log(`Id: ${n1.id} - Nome: ${n1.nome} - Pet: ${n1.pet} - Fidelidade: ${n1.fidelidade}`);