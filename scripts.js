const images = [
  "image1.png",
  "image2.png",
  "image3.png",
];

let currentIndex = 0;

function showImage(index) {
  const img = document.querySelector("#image");
  img.src = "images/" + images[index];
  currentIndex = index;
}

function updateButtons() {
  const previousButton = document.querySelector("#previous");
  const nextButton = document.querySelector("#next");
  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
  previousButton.style.display = previousButton.disabled ? "none" : "inline-block";
  nextButton.style.display = nextButton.disabled ? "none" : "inline-block";
}

function nextImage() {
if (currentIndex < images.length - 1) {
  currentIndex++;
  showImage(currentIndex);
  updateButtons();
}
}

function previousImage() {
if (currentIndex > 0) {
  currentIndex--;
  showImage(currentIndex);
  updateButtons();
}
}

function toggleInfo() {
  var x = document.getElementById("info");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

showImage(currentIndex);
updateButtons();

document.querySelector("#previous").addEventListener("click", previousImage);
document.querySelector("#next").addEventListener("click", nextImage);