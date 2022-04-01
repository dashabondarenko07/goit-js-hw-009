import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', createOnSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};
function createOnSubmit(event) {
  event.preventDefault();
  if (!e.target.tagName === 'BUTTON') return;

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  delayInp = Number(delay.value);
  stepInp = Number(step.value);
  amountInp = Number(amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayInp)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayInp += stepInp;
  };

  e.currentTarget.reset();
};
