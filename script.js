// Select elements from the DOM
const display = document.getElementById('passwordDisplay');
const btn = document.getElementById('generateBtn');

// The main Function
function generatePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let retVal = "";
    
    for (let i = 0; i < length; ++i) {
        // Pick a random index from the charset
        const randomIndex = Math.floor(Math.random() * charset.length);
        retVal += charset.charAt(randomIndex);
    }
    
    return retVal;
}

// Event listener to trigger the function on click
btn.addEventListener('click', () => {
    const newPassword = generatePassword(16); // You can change the length here
    display.value = newPassword;
});