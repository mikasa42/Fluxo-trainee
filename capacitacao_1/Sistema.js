const { Cliente } = require("./Cliente.js");
const { Consulta } = require("./Consulta.js");
const{ Animal } = require("./Animal.js");
const { Funcionario } = require("./Funcionario.js");

"use strict";

let n1 = new Cliente(1,'Mikaela','July','Sim');
let n2 = new Funcionario(1,'Mirella',1234);

console.log(`Id: ${n1.id} - Nome: ${n1.nome} - Pet: ${n1.pet} - Fidelidade: ${n1.fidelidade}`);
console.log(n2.senhaF);

const prompt = require("prompt-sync")({sigint:true});
//let x;
const x = parseInt(prompt('Digite um valor qualquer:'));
//x = entrada("Digite um valor qualquer:");
console.log(`x = ${x}`);