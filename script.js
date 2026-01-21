document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/swadisht.jpeg",
    "images/images.jpeg",
    "images/images (1).jpeg",
    "images/download.jpeg",
    "images/download (8).jpeg"
  ];

  const heroImage = document.getElementById("heroImage");

  if (!heroImage) {
    console.error("Hero image element not found");
    return;
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  heroImage.src = images[randomIndex];
});


