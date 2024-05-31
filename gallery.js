document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('nsfw-warning').style.display = 'flex'; // Show NSFW warning
    document.querySelector('.gallery').style.display = 'none'; // Hide gallery

    // Add event listener to the hold button
    document.getElementById('nsfw-button').addEventListener('mousedown', startTimer);
    document.getElementById('nsfw-button').addEventListener('mouseup', stopTimer);
});

let progressInterval;
let progress = 0;

function startTimer() {
    progress = 0;
    document.getElementById('progress-text').style.display = 'block'; // Show progress text
    progressInterval = setInterval(incrementProgress, 50);
}

function stopTimer() {
    clearInterval(progressInterval);
    if (progress >= 100) {
        document.getElementById('nsfw-warning').style.display = 'none';
        document.querySelector('.gallery').style.display = 'grid'; // Display gallery
    } else {
        progress = 0;
        document.getElementById('progress-bar').style.width = '0%';
        document.getElementById('progress-text').style.display = 'none'; // Hide progress text
    }
}

function incrementProgress() {
    if (progress < 100) {
        progress += 1;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').innerText = `${progress}%`; // Update progress text
    } else {
        stopTimer();
    }
}

// Function to close overlay
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Get all images in the gallery
var images = document.querySelectorAll('.image img');

// Add event listener to each image
images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the source of the clicked image
        var src = image.getAttribute('src');
        
        // Display the overlay with the full-size image
        document.getElementById('overlay-img').src = src;
        document.getElementById('overlay').style.display = 'block';
    });
});

// Function to close the overlay
function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

// Get all images in the gallery
var images = document.querySelectorAll('.image img');

// Add event listener to each image
images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Get the source of the clicked image
        var src = image.getAttribute('src');
        
        // Display the overlay with the full-size image
        var overlayImg = document.getElementById('overlay-img');
        overlayImg.src = src;
        overlayImg.style.maxWidth = '90%';
        overlayImg.style.maxHeight = '90%';
        document.getElementById('overlay').style.display = 'flex';
    });
});

// Function to close the overlay
function closeOverlay() {
    var overlayImg = document.getElementById('overlay-img');
    overlayImg.src = '';
    overlayImg.style.maxWidth = '100%';
    overlayImg.style.maxHeight = '100%';
    document.getElementById('overlay').style.display = 'none';
}

// Disable right-click on images
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
    
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeOverlay();
    }
});

function openOverlay(imageSrc) {
    var fullImage = document.getElementById('full-view-image');
    var previewImage = document.getElementById('preview-image');
    fullImage.src = imageSrc;
    previewImage.src = imageSrc; // Set preview image source
    document.querySelector('.overlay').style.display = 'flex';
    document.querySelector('.preview-image').style.display = 'block'; // Display preview image
}

function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.preview-image').style.display = 'none'; // Hide preview image
}

function goToHomePage() {
    window.location.href = "index.html"; // Change "index.html" to the actual URL of your home page
}
