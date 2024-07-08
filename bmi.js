document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    calculateBMI();
});

function calculateBMI() {
    // Retrieve values from inputs
    const heightInches = parseFloat(document.getElementById('heightInches').value);
    const weightPounds = parseFloat(document.getElementById('weightPounds').value);

    // Calculate BMI
    const heightCentimeters = heightInches * 2.54;
    const weightKilograms = weightPounds * 0.453592;
    const bmi = weightKilograms / ((heightCentimeters / 100) ** 2);

    // Display results
    const bmiResult = `<h2>Your BMI</h2>
                       <p>Height: ${heightCentimeters.toFixed(2)} cm</p>
                       <p>Weight: ${weightKilograms.toFixed(2)} kg</p>
                       <p>BMI: ${bmi.toFixed(2)}</p>`;
    
    document.getElementById('results').innerHTML = bmiResult;
}
