function calculateGPA() {
    // Get the input values as strings
    const historyGrade = document.getElementById('historyGrade').value.trim();
    const mathGrade = document.getElementById('mathGrade').value.trim();
    const englishGrade = document.getElementById('englishGrade').value.trim();
    const scienceGrade = document.getElementById('scienceGrade').value.trim();

    // Check if the input values are within the valid range (0-100)
    if (!isValidNumber(historyGrade) || !isValidNumber(mathGrade) || !isValidNumber(englishGrade) || !isValidNumber(scienceGrade)) {
        alert('Please enter valid grades in the range 0-100.');
        return;
    }

    // Calculate the total and average
    const total = Number(historyGrade) + Number(mathGrade) + Number(englishGrade) + Number(scienceGrade);
    const average = total / 4;

    // Check if the GPA is over 100
    if (average > 100) {
        alert('Error: GPA cannot be over 100.');
        return;
    }

    // Display the result in the resultContainer
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<p>Total: ${total}</p><p>Average: ${average.toFixed(2)}</p>`;
}

// Function to check if a string is a valid number
function isValidNumber(value) {
    const numberValue = Number(value);
    return !isNaN(numberValue) && numberValue >= 0 && numberValue <= 100;
}


// function calculateGPA() {
//     // Get the input values
//     const historyGrade = parseFloat(document.getElementById('historyGrade').value) || 0;
//     const mathGrade = parseFloat(document.getElementById('mathGrade').value) || 0;
//     const englishGrade = parseFloat(document.getElementById('englishGrade').value) || 0;
//     const scienceGrade = parseFloat(document.getElementById('scienceGrade').value) || 0;

//     // Calculate the total and average
//     const total = historyGrade + mathGrade + englishGrade + scienceGrade;
//     const average = total / 4;

//     // Display the result in the resultContainer
//     const resultContainer = document.getElementById('resultContainer');
//     resultContainer.innerHTML = `<p>GPA: ${average.toFixed(2)}</p>`;
// }