function showAlert() {
    alert("justin.tian.372@gmail.com");
}

/*
function copyLink() {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = "justin.tian.372@gmail.com"; // Replace with the actual link
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Show the notification
    const notification = document.getElementById("copy-notification");
    notification.style.display = "block";

    // Hide the notification after 2 seconds
    setTimeout(function () {
        notification.style.display = "none";
    }, 2000);
}
*/

window.onload = function () {
    const text = "Hello,";
    const heroTextElement = document.getElementById('hero');
    let index = 0;
    let isDeleting = false;
    let delay = 500;
    let typingSpeed = 200;
    let deletingSpeed = 200;

    function typing() {
        if (isDeleting) {
            heroTextElement.textContent = text.substring(0, index);
            index--;
            if (index === 1) {
                isDeleting = false;
                setTimeout(typing, delay);
            } else {
                setTimeout(typing, deletingSpeed);
            }
        } else {
            heroTextElement.textContent = text.substring(0, index);
            index++;
            if (index === text.length) {
                isDeleting = true;
                setTimeout(typing, delay);
            } else {
                setTimeout(typing, typingSpeed);
            }
        }
    }
    typing();
}

const getTheme = () => {
    return localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

// Apply theme to document
const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateButtonText(theme);
};

// Update button text based on current theme
const updateButtonText = (theme) => {
    const buttonText = document.querySelector('.button-text');
    buttonText.textContent = `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`;
};

// Initialize theme
applyTheme(getTheme());

// Add click handler to theme switch button
document.querySelector('.theme-switch').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
