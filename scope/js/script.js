// let username = "Pippo";
// 
// // Funzione pura, quella che non utilizza le variabili globali all'interno
// function greetingPippo(greetingName) {
//   console.log(`Ciao ${greetingName}`);
// }
// 
// // 1000 LOC
// username = "Pluto"
// 
// 
// greetingPippo(username); 


a = 0; 
b = "buongiorno"; 
var c = "ciao"; 

saluta(); 

console.log("a is " + a); 
console.log("b is " + b);

function saluta() {
    var d = "asd"; 
    console.log("a is " + a); 
    var b = a + 1; 
    console.log("b is " + b); 
    console.log(c); 
}