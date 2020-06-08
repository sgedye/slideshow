/* Javascript to create the slideshow effect with automation & buttons */
let slideIndex = 1;
showSlides(slideIndex);
autoTransition();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("my-slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function autoTransition() {
const box = document.getElementById("chk");
  if (box.checked)  
  {
    const slides = document.getElementsByClassName("my-slides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    let autoIndex = slideIndex;
    if (autoIndex > slides.length) {
      autoIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    slides[autoIndex-1].style.display = "block";  
    dots[autoIndex-1].classList.add("active");
    autoIndex++;
    slideIndex = autoIndex;
  setTimeout(autoTransition, 10000); // Change image every 10 seconds
  }
}

function clicked() {
  const box = document.getElementById("chk");
  if (box.checked) {
    document.getElementById("chk").checked = false;
  }
  else {
    document.getElementById("chk").checked = true;
    autoTransition();
  }
}