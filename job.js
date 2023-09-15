document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("job-application-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        // You can handle form submission and email confirmation here

        // For demonstration purposes, show the confirmation message
        confirmationMessage.classList.remove("hidden");
        form.reset();

        // Optionally, you can send the data to a server for processing and email confirmation
        // You may need to use backend technologies like Node.js or PHP for this.
    });
});
