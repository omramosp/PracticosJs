// inicio con la solicitud
// este ejercicio va con el index2
const btnuser = document.getElementById("btnUser");
const translate = document.getElementById("translate");

// debo colocar la condicional
const traducir = () => {
  let word = prompt(
    "Escoge una de las siguientes palabras : \n Casa \n Mesa \n perro \n Gato \n Y te mostraremos su traducción al ingles : "
  );
  word = word.toLowerCase();

  switch (word) {
    case "casa":
      translate.innerHTML = "La traducción de esta palabra es House";
      break;
    case "mesa":
      translate.innerHTML = "La traducción de esta palabra es Table";
      break;
    case "perro":
      translate.innerHTML = "La traducción de esta palabra es Dog";
      break;
    case "gato":
      translate.innerHTML = "La traducción de esta palabra es Cat";
      break;
    default:
      alert("Error al escoger la palabra");
      break;
  }
};

btnUser.onclick = function () {
  traducir();
};
