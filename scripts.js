var currentImageIndex = 0;
var images = ["images/image2.jpg", "images/image3.jpg"]; // Array of image paths
var labels = ["Bookshelf Speakers, 2022", "Acoustic Synthesis_phase 5, 2023"]; // Array of corresponding texts

function changeImage() {
    var image = document.getElementById('image');
    var label = document.getElementById('label');

    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
    image.src = images[currentImageIndex]; // Change image source
    label.textContent = labels[currentImageIndex]; // Change text content
}