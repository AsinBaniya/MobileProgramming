// 1. Hide a container
function hideContainer() {
  document.getElementById("container1").style.display = "none";
}

// 2. Show a hidden container
function showContainer() {
  document.getElementById("container2").style.display = "block";
}

// 3. Change image between download1.jpg and download2.jpg
let currentImage = 1;
function changeImage() {
  const image = document.getElementById("demoImage");

  if (currentImage === 1) {
    image.src = "download2.jpg";
    currentImage = 2;
  } else {
    image.src = "download1.jpg";
    currentImage = 1;
  }
}

// 4. Change background color randomly
function changeColor() {
  const container = document.getElementById("container4");
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffd9b3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  container.style.backgroundColor = randomColor;
}

// 5. Change HTML content
function changeContent() {
  const content = document.getElementById("contentText");
  content.innerHTML = "<b>Content has been changed successfully!</b>";
}