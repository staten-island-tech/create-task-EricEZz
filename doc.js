document.addEventListener('DOMContentLoaded', function () {
    const gpaForm = document.getElementById('gpaForm');
    const resultsContainer = document.getElementById('resultsContainer');

    gpaForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const historyGrade = document.getElementById('historyGrade').value || 0;
        const mathGrade = document.getElementById('mathGrade').value || 0;
        const englishGrade = document.getElementById('englishGrade').value || 0;
        const scienceGrade = document.getElementById(‘scienceGrade’).value || 0;

        const totalCredits = 4; // Assuming each subject has equal weight
        const totalPoints = +historyGrade + +mathGrade + +englishGrade + +scienceGrade; // The unary plus converts strings to numbers
        const gpa = totalPoints / totalCredits;

        resultsContainer.innerHTML = `<p>Your GPA is: ${gpa.toFixed(2)}</p>`;
    });
});