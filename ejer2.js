const  btnuser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");
const sueldo = document.getElementById("sueldo");


//funciones

const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    let salario = prompt("Ingresa tu salario");
    let basico = parseInt(salario);
    console.log(basico);
    welcome.innerHTML = "Bienvenido/a : " + userName;
    sueldo.innerHTML =  "Tu salario es: " + basico;
}

//evento

btnUser.onclick = function () {
    userData();
}