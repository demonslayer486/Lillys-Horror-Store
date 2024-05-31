document.addEventListener("DOMContentLoaded", function() {
    // Fullscreen Image Display Logic
    var images = document.querySelectorAll('.review-image');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            openOverlay(image.src);
        });
    });
});

// Function to open the overlay with the full-size image
function openOverlay(src) {
    var overlay = document.getElementById('overlay');
    var overlayImg = document.getElementById('overlay-img');
    overlayImg.src = src;
    overlay.style.display = 'flex';
}

// Function to close the overlay
function closeOverlay() {
    var overlay = document.getElementById('overlay');
    var overlayImg = document.getElementById('overlay-img');
    overlayImg.src = '';
    //overlay.style.display = 'none';
    document.getElementById('overlay').style.display = 'block';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Disable right-click on images
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

        // JavaScript code here
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeOverlay();
    }
});

        /*function openOverlay(imageSrc) {
            var overlayImg = document.getElementById('overlay-img');
            overlayImg.src = imageSrc;
            document.getElementById('overlay').style.display = 'block';
        }

        function closeOverlay() {
            document.getElementById('overlay').style.display = 'none';
        }*/