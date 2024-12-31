function showAlert() {
    alert("justin.tian.372@gmail.com");
}

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

