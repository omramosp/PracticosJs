const btnuser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

const userData = () => {
  let name = prompt("Ingresa tu nombre");
  let lastName = prompt("Ingresa tu apellido");
  let age = prompt("Ingresa tu edad");
  let numPhone = prompt("Ingresa tu número telefonico");
  let numCell = prompt("Ingresa tu número celular");
  let address = prompt("Ingresa tu dirección");
  if (
    name == null ||
    name == "" ||
    lastName == null ||
    lastName == "" ||
    age == null ||
    age == "" ||
    numPhone == "" ||
    numPhone == null ||
    numCell == null ||
    numCell == "" ||
    address == null ||
    address == ""
  ) {
    return alert("Error en el momento de ingresar los datos");
  }
  welcome.innerHTML =
    "Bienvenido/a : " +
    name +
    lastName +
    ", Tu edad es: " +
    age +
    ", Tu numero de telefono : " +
    numPhone +
    ", Tu numero de celular es: " +
    numCell +
    ", Y Tu dirección es: " +
    address;
  localStorage.setItem("nombre", name);
  localStorage.setItem("apell", lastName);
  localStorage.setItem("edad", age);
  localStorage.setItem("phone", numPhone);
  localStorage.setItem("cell", numCell);
  localStorage.setItem("add", address);
};

if (localStorage.getItem("nombre", "apell", "edad", "phone", "Cell", "add")) {
  welcome.innerHTML =
    "Bienvenido/a : " +
    localStorage.getItem("nombre") +
    localStorage.getItem("apell") +
    ", Tu edad es: " +
    localStorage.getItem("edad") +
    ", Tu numero de telefono : " +
    localStorage.getItem("phone") +
    ", Tu numero de celular es: " +
    localStorage.getItem("cell") +
    ", Y Tu dirección es: " +
    localStorage.getItem("add");
}
//evento

btnUser.onclick = function () {
  userData();
};
