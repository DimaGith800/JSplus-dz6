import { getRandomRgbColor } from "./utils.js";

const button = document.querySelector('.change-color');
const square = document.querySelector('.square')

button.addEventListener('click', () => {
  square.style.backgroundColor = getRandomRgbColor()
});