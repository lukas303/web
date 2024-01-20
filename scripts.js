document.addEventListener("DOMContentLoaded", function () {
  var randomImage = document.getElementById("random-image");

  // Array of image URLs to be used
  var imageUrls = [
      "file:///Users/lukas/Documents/Github/web/images/image2.png",
      "file:///Users/lukas/Documents/Github/web/images/image3.png",
      "file:///Users/lukas/Documents/Github/web/images/image1.png",
      // Add more image URLs as needed
  ];

  // Set the initial random position and show the image
  setRandomPosition();
  randomImage.style.display = "block";

  // Initialize the index to 0
  var currentIndex = 0;

  randomImage.addEventListener("click", function () {
      // Generate random positions and set the next image
      setRandomPosition();
      setNextImage();
  });

  function setRandomPosition() {
      // Get the dimensions of the visible portion of the website
      var visibleWidth = window.innerWidth;
      var visibleHeight = window.innerHeight;

      // Set a buffer around the visible width and height
      var bufferX = 120; // Adjust as needed
      var bufferY = 100; // Adjust as needed

      // Calculate the maximum random positions considering the buffer
      var maxX = visibleWidth - randomImage.width - bufferX;
      var maxY = visibleHeight - randomImage.height - bufferY;

      // Generate random positions
      var randomX = Math.floor(Math.random() * maxX);
      var randomY = Math.floor(Math.random() * maxY);

      // Set the position
      randomImage.style.left = randomX + "px";
      randomImage.style.top = randomY + "px";
  }

  function setNextImage() {
      // Set the next image URL from the array
      randomImage.src = imageUrls[currentIndex];

      // Increment the index or reset to 0 if it reaches the end
      currentIndex = (currentIndex + 1) % imageUrls.length;
  }
});

function toggleInfo() {
  var x = document.getElementById("info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}