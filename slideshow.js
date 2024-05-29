var slideIndex = 0;
var isTransitioning = false; // Flag to prevent rapid clicking during transitions
var slideshowInterval; // Variable to store the interval ID

// Start the slideshow
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (!isTransitioning) {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        isTransitioning = true;
        setTimeout(function() {
            isTransitioning = false;
        }, 1000); // Set the transition time in milliseconds
    }
    slideshowInterval = setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Next/previous controls
function plusSlides(n) {
    if (!isTransitioning) {
        showSlides(slideIndex += n);
    }
}

// Pause slideshow on mouseenter
document.querySelector('.slideshow-container').addEventListener('mouseenter', function() {
    clearInterval(slideshowInterval);
});

// Resume slideshow on mouseleave
document.querySelector('.slideshow-container').addEventListener('mouseleave', function() {
    slideshowInterval = setTimeout(showSlides, 2000);
});

