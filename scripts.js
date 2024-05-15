var currentImageIndex = 0;
var images = ["images/image2.jpg", "images/image3.jpg","images/image4.jpg", "images/image5.jpg"]; // Array of image paths
var labels = ["Bookshelf Speakers, 2022", "Acoustic Synthesis_phase5, 2023", "Library Speakers, 2023", "Acoustic Synthesis_phase8, 2023"]; // Array of corresponding texts

function changeImage() {
    var image = document.getElementById('image');
    var label = document.getElementById('label');

    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
    image.src = images[currentImageIndex]; // Change image source
    label.textContent = labels[currentImageIndex]; // Change text content
}