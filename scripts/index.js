/* Adding slides and dots to the HTML */
const slides = document.getElementById("slides")
const dots = document.querySelector(".dots")
const slideData = [ { id: 1, src: "cuba_1.jpg" }, { id: 2, src: "cuba_2.jpg" }, { id: 3, src: "cuba_3.jpg" }, { id: 4, src: "cuba_4.jpg" }, { id: 5, src: "cuba_5.jpg" }, { id: 6, src: "cuba_6.jpg" }, { id: 7, src: "cuba_7.jpg" }, { id: 8, src: "cuba_8.jpg" }, { id: 9, src: "cuba_9.jpg" }, { id: 10, src: "cuba_10.jpg" }, { id: 11, src: "cuba_11.jpg" }, { id: 12, src: "cuba_12.jpg" } ]
const numSlides = slideData.length
slideData.forEach(item => {
  const slide = document.createElement('div')
  slide.classList.add('my-slides', 'fade')
  slide.innerHTML = `
    <div class="number-text">${item.id} / ${numSlides}</div>
      <img src="./pics/${item.src}" width=100% />
    </div>
  `
  slides.appendChild(slide)
  dots.innerHTML += `<span class="dot" onclick="currentSlide(${item.id})"></span>`
})

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
  setTimeout(autoTransition, 8000); // Change image every 8 seconds
  }
}

function clicked() {
  const box = document.getElementById("chk");
  if (box.checked) {
    box.checked = false;
  }
  else {
    box.checked = true;
    autoTransition();
  }
}