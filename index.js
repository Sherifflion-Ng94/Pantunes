const sliderImage = document.getElementById("slide-image");
const indicatorContainer = document.getElementById("indicator-container");
const images = ["pantunes-1", "slide-1", "slide-2", "slide-3"];

const indicators = [
  `<div class="active-slider"></div>
<div class="slide-indicator"></div>
<div class="slide-indicator"></div>
<div class="slide-indicator"></div>`,

  `<div class="slide-indicator"></div>
<div class="active-slider"></div>
<div class="slide-indicator"></div>
<div class="slide-indicator"></div>`,

  `<div class="slide-indicator"></div>
<div class="slide-indicator"></div>
<div class="active-slider"></div>
<div class="slide-indicator"></div>`,

  `<div class="slide-indicator"></div>
<div class="slide-indicator"></div>
<div class="slide-indicator"></div>
<div class="active-slider"></div>`,
];

let index = 0;

setInterval(() => {
  index++;
  if (index === 4) {
    index = 0;
  }
  // console.log(indicators[index]);
  indicatorContainer.innerHTML = indicators[index];
  sliderImage.setAttribute("src", `/images/${images[index]}.png`);
}, 2000);
