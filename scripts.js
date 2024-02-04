document.addEventListener("DOMContentLoaded", function () {
  var randomImage = document.getElementById("random-image");

  // Array of image URLs to be used
  var imageUrls = [
      "images/image3.png",
      "images/image1.png",
      "images/image2.png",
      // Add more image URLs as needed
  ];

  // Initialize the index to 0
  var currentIndex = 0;

  // Get the stored index from local storage
  var storedIndex = localStorage.getItem('currentIndex');

  // If there's a stored index, use it as the currentIndex
  if (storedIndex !== null) {
      currentIndex = parseInt(storedIndex);
  }

  // Set the initial image source based on the currentIndex
  randomImage.src = imageUrls[currentIndex];

  randomImage.addEventListener("click", function () {
      // Increment the index or reset to 0 if it reaches the end
      currentIndex = (currentIndex + 1) % imageUrls.length;

      // Set the next image URL from the array
      randomImage.src = imageUrls[currentIndex];

      // Call the function to set the random position
      setRandomPosition();

      // Store the currentIndex in local storage
      localStorage.setItem('currentIndex', currentIndex.toString());
  });

  // Call the function to set the initial random position and show the image
  setRandomPosition();
  randomImage.style.display = "block";

  function setRandomPosition() {
      var visibleWidth = window.innerWidth;
      var visibleHeight = window.innerHeight;

      var imageWidth, imageHeight;

      if (visibleWidth < 400) {
          randomImage.style.width = "204px";
          randomImage.style.height = "306px";
          imageWidth = 204;
          imageHeight = 306;
      } else {
          randomImage.style.width = "";
          randomImage.style.height = "";
          imageWidth = 340;
          imageHeight = 510;
      }

      var bufferLeft = 5;
      var bufferBottom = 50;
      var bufferRight = 40;
      var bufferTop = 10;

      var excludeAreaWidth = 200;
      var excludeAreaHeight = 200;

      var maxX = visibleWidth - imageWidth - bufferRight;
      var maxY = visibleHeight - imageHeight - bufferBottom;

      var maxAttempts = 100;

      var randomX, randomY;
      var attempts = 0;
      var validPosition = false;

      while (!validPosition && attempts < maxAttempts) {
          randomX = Math.floor(Math.random() * (maxX - bufferLeft + 1)) + bufferLeft;
          randomY = Math.floor(Math.random() * (maxY - bufferTop + 1)) + bufferTop;

          if (!(randomX < excludeAreaWidth && randomY < excludeAreaHeight)) {
              validPosition = true;
          }

          attempts++;
      }

      if (validPosition) {
          randomImage.style.left = randomX + "px";
          randomImage.style.top = randomY + "px";
      } else {
          console.error("Unable to find a valid position after " + maxAttempts + " attempts.");
      }
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