const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


// Certificate Verification

// Certificate Verification

const verificationForm = document.querySelector(".verification-form");
const certificateNumber = document.querySelector("#certificate-number");

verificationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const number = certificateNumber.value.trim().toUpperCase();

    if (!number) {
        return;
    }

    const verificationURL =
        "https://verify.cidh-bu.org?id=" +
        encodeURIComponent(number);

    window.location.href = verificationURL;

});
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}