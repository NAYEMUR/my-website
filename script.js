function showMessage() {
    alert("Hello, Nayemur! Welcome to your website.");
}
function moveText() {
    let text = document.getElementById("movingText");
    let position = window.innerWidth; // Start from the right
    text.style.position = "absolute";

    function animate() {
        if (position > -text.offsetWidth) {
            position -= 2; // Move left slowly
            text.style.left = position + "px";
            requestAnimationFrame(animate);
        } else {
            position = window.innerWidth; // Restart when it disappears
            requestAnimationFrame(animate);
        }
    }
    animate();
}

// Run the function when the page loads
window.onload = moveText;
