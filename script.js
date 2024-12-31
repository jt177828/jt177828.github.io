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
