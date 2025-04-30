let temp = parseFloat(prompt("Digite a temperatura:"));

if (temp >= 30) {
    console.log("Está muito quente.")
} else if (temp >= 20) {
    console.log("Está agradável.");
} else if (temp >= 10) {
    console.log("Está frio");
} else {
    console.log("Está muito frio");
    alert("Hello world")
}