/* eslint-disable no-unused-vars */

// Open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Display first image in the slideshow when page loads
let slideIndex = 1;
showSlides(slideIndex);

// Change slide when left or right arrows are clicked
function plusSlides(n) {
    // Increment or decrement slideIndex and display
    showSlides(slideIndex += n);
}

// Change slide when dots are clicked
function currentSlide(n) {
    // Set slideIndex based on dot clicked and display
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // Get all slide elements
    let slides = document.getElementsByClassName("mySlides");
    // Get all dot elements
    let dots = document.getElementsByClassName("dot");

    // If n is greater than length of array (clicked right past the end)
    // then set slideIndex to 1 (wrap back around to beginning).
    if (n > slides.length) { slideIndex = 1; }

    // If n is less than length of array (clicked left past beginning)
    // then set slideIndex to length of array (wrap back around to end).
    if (n < 1) { slideIndex = slides.length; }

    // Set each slide in array and set display to none
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" from each dot which will remove active styling.
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display image
    slides[slideIndex - 1].style.display = "block";
    // Add active styling to dot for associated image
    dots[slideIndex - 1].className += " active";

}
