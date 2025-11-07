<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PhotographyX — Systems Through the Lens</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>PhotographyX</h1>
      <nav>
        <a href="#gallery">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section id="hero">
      <h2>Observing structure hidden in plain sight.</h2>
      <p>From remote villages to terraced hillsides — exploring natural order, computational beauty, and human geometry.</p>
    </section>

    <section id="gallery" class="gallery"></section>

    <div class="lightbox" id="lightbox">
      <span id="closeBtn">×</span>
      <img id="lightbox-img" src="" alt="Preview" />
      <p id="lightbox-caption"></p>
    </div>

    <section id="about" class="about">
      <h2>About PhotographyX</h2>
      <p>An exploration into the structural language of our world — blending computational thinking and artistic observation to reveal patterns in nature, community, and time.</p>
    </section>

    <footer id="contact">
      <p>© 2025 PhotographyX. All rights reserved.</p>
      <p>Made by Alkindi — Engineering × Systems × Visuals</p>
    </footer>

    <script src="app.js"></script>
  </body>
</html>

<!-- styles.css -->
/* Paste updated world-class CSS here */

<!-- app.js -->
// Dynamically load sequentially named images
// Example filenames: "Maker Portfolio - Visual Arts - 1.jpg"
// Update totalImages if you add more files

const totalImages = 30; // <-- adjust to your count
const gallery = document.getElementById('gallery');

function loadImages() {
  for (let i = 1; i <= totalImages; i++) {
    const fileName = `Maker Portfolio - Visual Arts - ${i}.jpg`;
    const img = document.createElement('img');
    img.src = `Portfolio/${fileName}`;
    img.alt = `Visual Arts ${i}`;
    img.loading = 'lazy';

    img.addEventListener('click', () => openLightbox(img.src, img.alt));
    gallery.appendChild(img);
  }
}

function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-caption');

  lbImg.src = src;
  lbCap.textContent = caption;
  lb.style.display = 'flex';
}

document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

loadImages();

<!-- photos.json -->
/* Paste updated sample metadata here */
