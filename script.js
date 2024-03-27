const submitBtn = document.getElementById('submit-btn');
const botones = document.querySelector('#numbers');
const containerOutput = document.querySelector('.container_2');
const containerInput = document.querySelector('.container_1');
const ratingOutput = document.querySelector('.rating_output');

botones.addEventListener('click', (event) => {
    let choice = parseInt(event.target.textContent);
    if (choice > 0 && choice <= 5) {
        submitBtn.addEventListener('click', () => {
            containerInput.style.display = 'none';
            containerOutput.style.display = 'flex';
            ratingOutput.textContent = choice;
        });
    }
});

