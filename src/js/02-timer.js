import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
       if (selectedDates[0] < new Date()) {
     alert('Please choose a date in the future')
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
  },
}
  
flatpickr(datePicker, options);

function convertMs(ms) {

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

btnStart.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(datePicker.value) - new Date();
    btnStart.disabled = true;
    if (countdown>=0) {
      let timeObject = convertMs(countdown);
      days.textContent = addLeadingZero(timeObject.days);
      hours.textContent = addLeadingZero(timeObject.hours);
      minutes.textContent = addLeadingZero(timeObject.minutes);
      seconds.textContent = addLeadingZero(timeObject.seconds);
    }
  }, 1000);
});

