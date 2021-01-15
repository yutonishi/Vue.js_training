const main_btn = document.getElementById('main_btn');
const main_hidden = document.getElementById('main_hidden');
const main = document.getElementById('main');

main_btn.addEventListener('click', function(){
  main_btn.classList.toggle('clicked');
  main_hidden.classList.toggle('clicked');
});

