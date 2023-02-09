import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startButton.setAttribute('disabled', true);

startButton.removeAttribute('disabled');

let userDate = new Date();
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date) {
      Notiflix.Report.warning("Alarm!", "Please choose a date in the future", "Ok");
      startButton.setAttribute('disabled', true);
      return;
    }
    userDate = selectedDates[0];
    timerUpd();
  }, 
};

function timerUpd() {
    const { days, hours, minutes, seconds } = convertMs(userDate - new Date());

    dataDays.textContent = addLeadingZero(days);
    dataHours.textContent = addLeadingZero(hours);
    dataMinutes.textContent = addLeadingZero(minutes);
    dataSeconds.textContent = addLeadingZero(seconds);
}

flatpickr(inputEl, options);

startButton.addEventListener('click', startTimer);

function startTimer() {
  intervalId = setInterval(() => {
    if (userDate <= new Date()) {
      clearInterval(intervalId);
      return;
    }
    timerUpd();
  }, 1000); 
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

function addLeadingZero(number) {
   return String(number).padStart(2, 0);
}

