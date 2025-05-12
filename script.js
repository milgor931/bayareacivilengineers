const SERVICE_ID = "service_pxk0owd"
const TEMPLATE_ID = "template_ykz8t29"

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    // Function to open sidebar
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from being immediately registered on the document
        sidebar.classList.add("open");
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        sidebar.classList.remove("open");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkFade() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade(); // Run once on load in case elements are already in view
});

window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Simulate sending the form data
        let statusSpan = document.getElementById("status");

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                statusSpan.innerText = "Message sent successfully!";
                // Reset the form
        document.getElementById("contact-form").reset();
            }, error => {
                console.log('FAILED...', error);
                statusSpan.innerText = "Failed to send email, please try again.";
            });
    });
}