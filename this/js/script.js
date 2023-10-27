// Function interna è la funzione di callback: non la invochiamo noi, ma viene invocata da un'altra funzione
document.getElementById("my-button").addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
    console.log(event);
    this.style.backgroundColor = "red";
}