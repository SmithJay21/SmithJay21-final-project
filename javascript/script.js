const form = document.getElementById("newsletter-form");
const message = document.getElementById("message");

if (form) {
form.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent = "Thank you for subscribing to GreenTech Solutions!";

    form.reset();
});
}

const products = document.querySelectorAll(".product");
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const category = button.dataset.filter;

        products.forEach(product => {

            if (category === "all") {
                product.style.display = "block";
            }
            else if (product.classList.contains(category)) {
                product.style.display = "block";
            }
            else {
                product.style.display = "none";
            }
        });
    });
});

console.log("JavaScript connected");

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        contactMessage.textContent =
            "Your message has been sent successfully!";

        contactForm.reset();

    });

}