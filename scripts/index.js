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
  dots.innerHTML += `<span id="dot_${item.id}" class="dot" onclick="showSlides(${item.id})"></span>`
})

/* Javascript to create the slideshow effect with automation & buttons */
showSlides(1); // Show the first image

function getSlideId() {
  const currentSlide = document.querySelector('.active')
  return Number(currentSlide.id.replace(/\D+/, ''))
}

function arrowNavigation(direction) {
  const currentSlide = getSlideId()
  showSlides(currentSlide + direction);
}

function showSlides(slideToShow) {
  let slideIndex = slideToShow % numSlides;
  if (slideIndex === 0) {
    slideIndex = numSlides
  }
  for (let i = 0; i < numSlides; i++) {
    slides.children[i].style.display = "none";
    dots.children[i].classList.remove("active");
  }
  slides.children[slideIndex-1].style.display = "block";  
  dots.children[slideIndex-1].classList.add("active");
}

const box = document.getElementById("chk");

function autoTransition() {
  if (box.checked) {
    const currentSlide = getSlideId()
    showSlides(currentSlide + 1)
  }
}

const playPause = document.getElementById('play-pause')

const clicked = () => {
  playPause.innerHTML = box.checked ? `<i class="fa fa-play"></i>` : `<i class="fa fa-pause"></i>`
  box.checked = !box.checked;
}
setInterval(autoTransition, 8000);