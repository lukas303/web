var currentImageIndex = 0;

var images = ["images/image2.jpg", 
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg"
]; // Array of image paths

var labels = ["Bookshelf Speakers, 2022", 
    "Acoustic Synthesis_phase5, 2023", 
    "Library Speakers, 2023", 
    "Acoustic Synthesis_phase8, 2024", 
    "phase8, 2025"
]; // Array of corresponding texts


function changeImage() {
    var image = document.getElementById('image');
    var label = document.getElementById('label');

    currentImageIndex = (currentImageIndex + 1) % images.length;
    image.src = images[currentImageIndex];
    label.textContent = labels[currentImageIndex];
}

var interval = setInterval(changeImage, 8000);

var img = document.getElementById('image');
img.addEventListener('mouseenter', () => clearInterval(interval));
img.addEventListener('mouseleave', () => {
    interval = setInterval(changeImage, 8000);
});