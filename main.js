/*Header number*/
const arrow_up = document.querySelector('.arrow_up')
const arrow_down = document.querySelector('.arrow_down')
const call = document.querySelector('.call')
arrow_up.addEventListener('click', () => {
    arrow_down.style.display = 'flex';
    arrow_up.style.display = 'none';
    call.style.display = 'flex';
})
arrow_down.addEventListener('click', () => {
    arrow_down.style.display = 'none';
    arrow_up.style.display = 'flex';
    call.style.display = 'none';
})


/*block_reviews_Slider*/
let block_reviews_counter = 1;
const block_reviews_slideWidth = document.querySelector('.block_reviews_slide').clientWidth;
const block_reviews_slides = document.querySelector('.block_reviews_slides');

function block_reviews_slide() {
  block_reviews_slides.style.transition = "transform 0.5s ease";
  block_reviews_slides.style.transform = `translateX(${-block_reviews_slideWidth * block_reviews_counter}px)`;
}

function block_reviews_changeSlide(direction) {
  if (direction === -1) {
    block_reviews_counter = block_reviews_counter === 0 ? 2 : block_reviews_counter - 1;
  } else {
    block_reviews_counter = block_reviews_counter === 2 ? 0 : block_reviews_counter + 1;
  }
  block_reviews_slide();
}



/*block_certificates_Slider*/
let block_certificates_counter = 1;
const block_certificates_slideWidth = document.querySelector('.block_certificates_slide').clientWidth;
const block_certificates_slides = document.querySelector('.block_certificates_slides');

function block_certificates_slide() {
  block_certificates_slides.style.transition = "transform 0.5s ease";
  block_certificates_slides.style.transform = `translateX(${-block_certificates_slideWidth * block_certificates_counter}px)`;
}

function block_certificates_changeSlide(direction) {
  if (direction === -1) {
    block_certificates_counter = block_certificates_counter === 0 ? 2 : block_certificates_counter - 1;
  } else {
    block_certificates_counter = block_certificates_counter === 2 ? 0 : block_certificates_counter + 1;
  }
  block_certificates_slide();
}
