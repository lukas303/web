var currentImageIndex = 0;
var images = ["images/image1.png", "images/image2.png", "images/image3.png"]; // Array of image paths
var labels = ["Bookself Speaker, Berlin 2023", "Burned Pipe, Ireland 2018", "Photo Booth, Leipzig 2022"]; // Array of corresponding texts

function changeImage() {
    var image = document.getElementById('image');
    var label = document.getElementById('label');

    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images
    image.src = images[currentImageIndex]; // Change image source
    label.textContent = labels[currentImageIndex]; // Change text content
}