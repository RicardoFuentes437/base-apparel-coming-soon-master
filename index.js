var button = document.querySelector('.formButton');
var input = document.querySelector('.emailInput');

button.addEventListener('mouseover', function(){
    button.style.backgroundImage = "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 74%, 74%))";
})

button.addEventListener('mouseout', function(){
    button.style.backgroundImage = "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))";
})

button.addEventListener('click', function(event){
    event.preventDefault();
    input.style.border = "3px solid hsl(0, 93%, 68%)";
    input.stlye.backgroundImage = 'url("images/icon-error.svg")';
})

input.addEventListener('focus', function(){
    input.style.border = "2px solid hsl(0, 36%, 70%)";
})

input.addEventListener('blur', function(){
    input.style.border = "1px solid hsl(0, 36%, 70%)";
})