const DOMSelectors = {
    history: document.getElementById("historyGrade"),
    science: document.getElementById("scienceGrade"),
    english: document.getElementById("englishGrade"),
    math: document.getElementById("mathGrade"),
    container: document.querySelector(".container"),
    button: document.querySelector(".calculate")
};

function clear(){
    DOMSelectors.container.innerHTML= "";
}

DOMSelectors.button.addEventlistener("click", function(event){
    event.preventDefault();
    clear();
    calculateGPA();
})
function calculateGPA(){
    const total = (historyGrade.value) + (mathGrade.value) + (englishGrade.value) + (scienceGrade.value);
    const average = total/4; 
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div id="resultsContainer">
        <h1>Your GPA is:${average}</h1>
        </div> `)
    return average; 
}


//const DomSelectors = {
//     history: document.getElementById("historyGrade"),
//     science: document.getElementById("scienceGrade"),
//     english: document.getElementById("englishGrade"),
//     math: document.getElementById("mathGrade"),
//     resultContainer: document.getElementById("resultContainer")
// }

// function calculateGPA() {
//     const historyGrade = +DomSelectors.history.value || 0;
//     const mathGrade = +DomSelectors.math.value || 0;
//     const englishGrade = +DomSelectors.english.value || 0;
//     const scienceGrade = +DomSelectors.science.value || 0;

//     const total = historyGrade + mathGrade + englishGrade + scienceGrade;
//     const average = total / 4;

//     // Display the average in the result container
//     DomSelectors.resultContainer.textContent = `Your GPA is: ${average.toFixed(2)}`;
// }

// // Attach the calculateGPA function to the click event of the Calculate button
// document.getElementById("calculate").addEventListener("click", calculateGPA);


// function calculateGPA() {
//     // Get the input values as strings
//     const historyGrade = document.getElementById('historyGrade').value.trim();
//     const mathGrade = document.getElementById('mathGrade').value.trim();
//     const englishGrade = document.getElementById('englishGrade').value.trim();
//     const scienceGrade = document.getElementById('scienceGrade').value.trim();

//     // Check if the input values are within the valid range (0-100)
//     if (!isValidNumber(historyGrade) || !isValidNumber(mathGrade) || !isValidNumber(englishGrade) || !isValidNumber(scienceGrade)) {
//         alert('Please enter valid grades in the range 0-100.');
//         return;
//     }

//     // Calculate the total and average
//     const total = Number(historyGrade) + Number(mathGrade) + Number(englishGrade) + Number(scienceGrade);
//     const average = total / 4;

//     // Check if the GPA is over 100
//     if (average > 100) {
//         alert('Error: GPA cannot be over 100.');
//         return;
//     }

//     // Display the result in the resultContainer
//     const resultContainer = document.getElementById('resultContainer');
//     resultContainer.innerHTML = `<p>Total: ${total}</p><p>Average: ${average.toFixed(2)}</p>`;
// }
// const calculate = document.getElementById('calculate')
// Function to check if a string is a valid number
/* function isValidNumber(value) {
    const numberValue = Number(value);
    return !isNaN(numberValue) && numberValue >= 0 && numberValue <= 100; }*/