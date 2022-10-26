function validateForm() {
    let x = document.forms["formulario"]["nombre"].value;
    let y = document.forms["formulario"]["email"].value;
    let xx = document.forms["formulario"]["asunto"].value;
    let z = document.forms["formulario"]["mensaje"].value;
    

    if (x == "") {
      alert("Falto completar el nombre");
      return false;
    }
    if (y == "") {
        alert("Falto completar el correo");
        return false;
    }
    if (xx == "") {
        alert("Falto completar el asunto");
        return false;
    }
    if (z == "") {
        alert("Falto completar el mensaje");
        return false;
    } 
} 