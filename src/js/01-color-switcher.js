function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', true);
const timerId = setInterval(() => {
    const newColor = getRandomHexColor();
    bodyEl.style.backgroundColor = newColor;
}, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
    // console.log(`stop`);
    startBtn.removeAttribute('disabled');
});

