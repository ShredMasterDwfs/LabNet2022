let infoMsg = document.getElementById("info-message");
var name = document.getElementById("name");
var lastName = document.getElementById("lastname");

const form = document.getElementById("form");

form.addEventListener('submit', submitForm);
form.addEventListener('reset', reset);

function submitForm(e){

    e.preventDefault();

    if (name.value == "" || lastName.value == ""){
        infoMsg.style.color = "red";
        infoMsg.innerHTML = "Hay campos sin completar.";
    } else {
        infoMsg.style.color = "green";
        infoMsg.innerHTML = "Datos enviados correctamente!";
    }    
}

function reset(){
    infoMsg.innerHTML = "";
}