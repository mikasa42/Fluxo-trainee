function carregar(){
    let input1 = window.document.getElementById("fname");
    let input2 = window.document.getElementById("lname");

    let email = input1.value;
    let senha = input2.value;
    
    alert("Voce confirma esses dados ? "+ " Email: "+ email + "Senha: "+ senha);
}