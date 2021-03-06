let number = document.querySelector("#number");
let length_mf = document.querySelector("#length_mf");
let length_fm = document.querySelector("#length_fm");
let volume_lg = document.querySelector("#volume_lg");
let volume_gl = document.querySelector("#volume_gl");
let mass_kp = document.querySelector("#mass_kp");
let mass_pk = document.querySelector("#mass_pk");
let button = document.querySelector("#button");
function unitNumber() {
    let unitNum = prompt("Type a number: ");
    let feetToMeter = unitNum * 0.3048;
    let meterToFeet = unitNum * 3.28084;
    let litersToGallons = unitNum * 0.264172;
    let gallonsToLiters = unitNum * 3.78541;
    let kilosToPounds = unitNum * 2.20462;
    let poundsToKilos = unitNum * 0.453592;
    number.textContent = unitNum;
    length_mf.textContent = `${unitNum} meters = ${meterToFeet.toFixed(3)} feet`;
    length_fm.textContent = `${unitNum} feet = ${feetToMeter.toFixed(3)} meters`;
    volume_lg.textContent = `${unitNum} liters = ${litersToGallons.toFixed(3)} gallons`;
    volume_gl.textContent = `${unitNum} gallons = ${gallonsToLiters.toFixed(3)} liters`;
    mass_kp.textContent = `${unitNum} kilos = ${kilosToPounds.toFixed(3)} pounds`;
    mass_pk.textContent = `${unitNum} pounds = ${poundsToKilos.toFixed(3)} kilos`;
};
unitNumber();
button.addEventListener("click", unitNumber);