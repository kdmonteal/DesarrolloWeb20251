// Author(a): Kelly Daniella Marin Montealegre

function saveLocal(){
    const name = document.getElementById("nameLocalS").value;
    localStorage.setItem("localName", name);

    displayLocal();
}

function displayLocal() {
    const localName = localStorage.getItem("localName");
    document.getElementById("localOutput").textContent = localName ? `Nombre guardado es ${localName}` : "No hay nombre guardado";
}


function saveSession(){
    const name = document.getElementById("nameSessionS").value;
    sessionStorage.setItem("sessionName", name);

    displaySession();
}

function displaySession() {
    const sessionName = sessionStorage.getItem("sessionName");
    document.getElementById("sessionOutput").textContent = sessionName ? `Nombre guardado es ${sessionName}` : "No hay nombre guardado";
}