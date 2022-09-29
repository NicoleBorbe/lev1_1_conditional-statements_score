var alter = document.getElementById("alter")
let ergebnis = document.getElementById("ergebnis");

function adult() {
    if (alter.value >= 18) {
        console.log(true);
        ergebnis.innerHTML = "volljährig";
    } else if (alter.value < 18) {
        console.log(false);
        ergebnis.innerHTML = "minderjährig";
    }
}
