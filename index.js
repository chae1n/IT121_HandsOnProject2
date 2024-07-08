function convert() {
    // Get miles value from input
    let miles = parseFloat(document.getElementById('miles').value);

    //Convert miles to kilometers (1 mile = 1.60934 kilometers)
    let kilometers = miles * 1.60934;

    //Display result
    document.getElementById('result').textContent = `${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`;
}
