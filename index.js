

document.querySelector('.js-btn').addEventListener('click', 

function() {

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.querySelector('.js-text').innerHTML= data.slip.advice;   
    document.body.classList.add('change-bg');
  });
});   