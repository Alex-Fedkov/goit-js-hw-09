import Notiflix from 'notiflix';

const delayEl = document.querySelector("[name='delay']");
const stepEl = document.querySelector("[name='step']");
const amountEl = document.querySelector("[name='amount']");
const formEl = document.querySelector(".form");

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);    
  });
  
}

formEl.addEventListener("submit", event => {
  event.preventDefault();
  const delay = Number(delayEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);

  if (delay < 0) {
    Notiflix.Report.warning("Alarm!", "Please, first delay ​​must not be less than or equal 0", "Reset");
    return;
  } else if (step < 0) {
    Notiflix.Report.warning("Alarm!", "Please, delay step ​​must not be less than or equal 0", "Reset");
    return;
  } else if (amount <= 0) {
    Notiflix.Report.warning("Alarm!", "Please, amount must not be less than to 0", "Reset");
    return;
  }

  let currentDelay = delay;
  for (let position = 1; position < amount; position += 1) {
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    currentDelay += step;
  }

  // for (let i = 0; i < amount; i += 1) {
  //   createPromise(i + 1, delay + i * step)
  //     .then(({ position, delay }) => {
  //       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //     })
  //     .catch(({ position, delay }) => {
  //       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //     });
  // }
});