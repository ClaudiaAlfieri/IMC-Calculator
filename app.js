
// Nível A — Desenvolvimento autónomo


document.addEventListener("DOMContentLoaded", function () {

    const weightInput = document.querySelector("#weight");
    const heightInput = document.querySelector("#height");
    const calculateBtn = document.querySelector("#calculateBtn");
    const resultBox = document.querySelector("#resultBox");

    calculateBtn.addEventListener("click", function () {

        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        const bmi = calculateBMI(weight, height);

     
        resultBox.classList.remove("d-none", "alert-success", "alert-warning", "alert-danger");

        if (bmi === "Invalid input") {
            resultBox.classList.add("alert-danger");
            resultBox.textContent = "Entrada inválida. Insere valores numéricos positivos.";
        } else {
            const category = getBMICategory(bmi);

           
            if (category === "Peso normal") {
                resultBox.classList.add("alert-success");
            } else if (category === "Pré obesidade (Sobrepeso)") {
                resultBox.classList.add("alert-warning");
            } else {
                resultBox.classList.add("alert-danger");
            }

            resultBox.textContent = "IMC: " + bmi + " — " + category;
        }
    });

});