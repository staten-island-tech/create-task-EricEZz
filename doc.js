function calculateGPA() {
    // Retrieve the grades from the input fields
    const historyGrade = document.getElementById('historyGrade').value || 0;
    const mathGrade = document.getElementById('mathGrade').value || 0;
    const englishGrade = document.getElementById('englishGrade').value || 0;
    const scienceGrade = document.getElementById('scienceGrade').value || 0;
    const totalCredits = 4; 
    const totalPoints = historyGrade + mathGrade + englishGrade + scienceGrade;
    const gpa = totalPoints / totalCredits;
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `<p>Your GPA is: ${gpa.toFixed(2)}</p>`;
}

document.getElementById('calculate').addEventListener('click', calculateGPA);
