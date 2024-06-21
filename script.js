const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const inputValue = textInput.value;
    const lowerReplaced = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (inputValue === "") {
        alert('Please input a value');
    } else if (inputValue.length === 1) {
        result.innerText = `${inputValue} is a palindrome`;
    } else if (lowerReplaced === [...lowerReplaced].reverse().join('')) {
        result.innerText = `${inputValue} is a palindrome`;
    } else {
        result.innerText = `${inputValue} is not a palindrome`;
    }
});
